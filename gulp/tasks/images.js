/*==========================================
=            Optimizar imagenes            =
==========================================*/
/*----------
Importo los plugins implicados y el archivo con las 
variables
----------*/
import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import util from 'gulp-util';

import config from '../config';

/*----------
Función para optimizar imagenes solo en entorno de producción.
Si no es entorno de producción simplemente traslada las images 
de una carpeta a otra.
----------*/
function img() {
    return gulp
        .src(config.paths.image.src, { since: gulp.lastRun(img) })
        .pipe(
            config.environment === 'production' ?
            imagemin(config.options.imagemin) : util.noop()
        )
        .pipe(gulp.dest(config.paths.image.dest))
};

/*----------
Exporto la funcion para poder llamarla en las tareas
----------*/
exports.img = img;