/*=========================================================
=           Index.js Donde declaro las tareas            =
=========================================================*/


/*----------  
importo gulp y las funciones necesarias para 
ejecutar las tareas  
----------*/
import gulp from 'gulp';

import { css } from './styles';
import { lookcss } from './styles';
import { work } from './watch';
import { js } from './scripts';
import { jsMove } from './scripts';
import { img } from './images';
import { cleanAll } from './clean';
import { html } from './html';

/*----------
Declaro las tareas
----------*/
gulp.task(
    'default',
    gulp.series(
        html,
        css,
        js,
        jsMove,
        img,
        work
    )
);

gulp.task('work', work);
gulp.task('images', img);
gulp.task('html', html);
gulp.task('cleanAll', cleanAll);
gulp.task('js', js);
gulp.task('jsMove', jsMove);
gulp.task('css', css);
gulp.task('lookcss', lookcss);

