/*=============================================
=            Revisa js, concatena y comprime  =
=============================================*/
/*----------
Importo los plugins implicados y el archivo con las 
variables
----------*/
import gulp from 'gulp';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import sourcemaps from 'gulp-sourcemaps';
import notify from 'gulp-notify';
import jshint from 'gulp-jshint';
import util from 'gulp-util';

import config from '../config';

/*----------
Funcion para revisar el codigo en desarrollo con jshint().
En modo producción concatena y comprime los archivos avisando
de lo sucedido con notify.
 ----------*/
function js() {
    return gulp
        .src(config.paths.scripts.src)
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(
            config.environment === 'production' ?
            concat('script.min.js') : util.noop()
        )
        .pipe(
            config.environment === 'production' ?
            uglify() : util.noop()
        )
        .pipe(gulp.dest(config.paths.scripts.dest))
        .pipe(
            config.environment === 'production' ?
            notify({
                message: "javascript concatenado y minificado",
                title: 'javascript produccion'
            }) : util.noop()
        )
};

/*----------
Si tenemos scripts de terceros los desplaza desde src a dist y los comprime.
----------*/

function jsMove() {
    return gulp
    .src(config.paths.scripts.vendor)
    .pipe(uglify())
    .pipe(gulp.dest(config.paths.scripts.destvendor))
    .pipe(notify({
        message: "javascript vendor movido",
        title: 'javascript vendor'

    }))
};

/*----------
Exporto las funciones para poder llamarlas en las tareas
----------*/
exports.js = js;
exports.jsMove = jsMove;