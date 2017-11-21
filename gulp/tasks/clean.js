/*=============================================
=            Eliminar archivos            =
=============================================*/
/*----------
Importo los plugins implicados y el archivo con las 
variables
----------*/

import gulp from 'gulp';
import del from 'del';

import config from '../config';

/*----------
Funcion para borrar todos los archivos de la 
carpeta dist
 ----------*/
function cleanAll() {
    return del([
        config.paths.css.dest,
        config.paths.scripts.dest,
        config.paths.image.dest,
        config.paths.html.dest
    ]);
};

/*----------
Exporto la funcion para poder llamarla en las tareas
----------*/
exports.cleanAll = cleanAll;