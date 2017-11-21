/*=============================================
= Procesa sass, añade prefijos, 
         limpia css y lo comprime     =
=============================================*/
/*----------
Importo los plugins implicados y el archivo con las 
variables
----------*/
import gulp from 'gulp';
import sass from 'gulp-sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import sourcemaps from 'gulp-sourcemaps';
import notify from 'gulp-notify';
import cssnano from 'cssnano';
import stylelint from 'gulp-stylelint';
import rename from 'gulp-rename';
import util from 'gulp-util';
import browserSync from 'browser-sync';

import config from '../config';

browserSync.create();
/*----------
Añadimos  prefijos y sourcemaps solo en desarrollo. En producción
limpia y comprime el css con las opciones de cssnano y lo renombra
con el sufijo .min.
BrowserSync injecta los cambios dentro del navegador sin necesidad
de recargar.
----------*/
function css() {
    return gulp
        .src(config.paths.css.src)
        .pipe(
        	config.lintcss === true ?
        	stylelint(config.options.stylelint) : util.noop()
		)
        .pipe(
            config.environment === 'development' ?
            sourcemaps.init() : util.noop()
        )
        .pipe(sass({ outputStyle: 'expanded' }).on('error', notify.onError({
            message: 'Error: <%= error.message %>',
            title: 'Fallo en css'
        })))    
        .pipe(postcss([autoprefixer({ browsers: config.options.autoprefixer.browsers })]))
        .pipe(
            config.environment === 'development' ?
            sourcemaps.write('./maps') : util.noop()
        )
        .pipe(
            config.environment === 'production' ?
            postcss([cssnano(config.options.cssnano)]) : util.noop()
        )
        .pipe(
            config.environment === 'production' ?
            rename({ suffix: '.min' }) : util.noop()
        )
        .pipe(gulp.dest(config.paths.css.dest))
        .pipe(browserSync.stream())
        .pipe(notify({
            message: "Css actualizado",
            title: 'Todo ok'
        }))
        .pipe(
            config.environment === 'production' ?
            notify({
                message: "Css listo en producciion",
                title: 'Vamooos!!'
            }) : util.noop()
        );

};

/*----------
Función para revisar el código css
----------*/
function lookcss() {
    return gulp
        .src(config.paths.css.src)
        .pipe(stylelint(config.options.stylelint))
}

/*----------
Exporto la funcion para poder llamarla en las tareas
----------*/
exports.css = css;
exports.lookcss = lookcss;