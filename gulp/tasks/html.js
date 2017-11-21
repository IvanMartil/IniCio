/*=============================================
=            Html include en entornos         =
=============================================*/
/*----------
Importo los plugins implicados y el archivo con las 
variables
----------*/
import gulp from 'gulp';
import processhtml from 'gulp-processhtml';
import util from 'gulp-util';
import htmlmin from 'gulp-htmlmin';

import config from '../config';

/*----------
Función que unifica los diferentes archivos html y añade 
diferentes links dependiendo del entorno. Con htmlmin elimina
los espacios en blanco del html en modo production
----------*/
function html() {
    return gulp
        .src('./src/*.html')
        .pipe(
            config.environment === 'production' ?
            processhtml(config.options.processhtmlProd) :
            util.noop()
        )
        .pipe(
            config.environment === 'production' ?
            htmlmin({collapseWhitespace: true}) :
            util.noop()
        )
        .pipe(
            config.environment === 'development' ?
            processhtml(config.options.processhtmlDev) :
            util.noop()
        )
        .pipe(gulp.dest('./dist'))

};
/*----------
Exporto la funcion para poder llamarla en las tareas
----------*/
exports.html = html;