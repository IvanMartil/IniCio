/*=============================================
=    Observa el código para detectar cambios
y actualizarse  =
=============================================*/
/*----------
Importo los plugins implicados y el archivo con las 
variables
----------*/
import gulp from 'gulp';
import browserSync from 'browser-sync';

import config from '../config';
import { css } from './styles';
import { html } from './html';
import { js } from './scripts';
import { img } from './images';

/*----------
Proxy en browserSync para la url del servidor local(xampp).
Observa cambios en las rutas pasadas y ejecuta funciones
cuando sucede
 ----------*/
function work() {
    browserSync.init({
        proxy: config.server.urlProject

    });
    gulp.watch(config.paths.html.src, html);
    gulp.watch(config.paths.scripts.src, js);
    gulp.watch(config.paths.css.src, css);
    gulp.watch(config.paths.image.src, img);
    gulp.watch(config.paths.html.dest).on('change', browserSync.reload);

};

/*----------
Exporto la funcion para poder llamarla en las tareas
----------*/
exports.work = work;