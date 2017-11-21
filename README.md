#IniCio con Gulp4


> *Plantilla base para trabajar con gulp 4*
>
> En la sección *doc* de la plantilla hay más información sobre su funcionamiento.


##Tabla de contenidos

- [Instalación](#Instalación)
- [Usando gulp](#Usando Gulp)
- [Comandos npm](#Comandos npm)
- [Estructura](#Estructura)

##Instalación
El primer paso es instalar [Nodejs](https://nodejs.org/es/) y desinstalar cualquier versión previa de gulp tanto a nivel local como

 global. La plantilla funciona con la versión 4 de gulp.

 ```bash
 npm uninstall gulp --save-dev
 npm uninstall gulp -g
 ```



Con gulp 4 necesitamos instalar CLI que ahora esta separado del propio gulp.

```bash
npm install gulp-cli -g
```



Con gulp instalado globalmente descargamos la plantilla y ejecutamos

```bash
npm install
```



El comando instalará todas las dependencias especificadas en package.json

Si todo es correcto ejecutando gulp -v veremos algo como esto.

```bash
CLI version 1.4.0
Local version 4.0.0-alpha.2 //solo en el caso de estar en el proyecto
```

Con gulp4 funcionando ya podemos trabajar con la plantilla.



***



##Usando Gulp

Dentro de la carpeta _gulp_ tenemos las tareas y el archivo de configuración.



**config.js**

En su interior tenemos las variables:

- *path*
    - contiene las rutas a los archivos

- *environment*
    - Coje su valor del entorno que le pasemos por terminal oen su ausencia
      development

- *lintcss*
    - Activa o desactiva el linter en la tarea css

- *server*
    - La url del servidor local

- *targets*
    - entornos para los el módulo processhtml ([info](https://github.com/Wildhoney/gulp-processhtml))

- *options*
    - opciones de configuración para los módulos instalados. Autoprefixer,
       imagemin, cssnano, processhtml (en modo desarrollo y en modo producción)




Las tareas estan separadas por archivos *gulp/tasks*.  

Podemos llamarlas de forma individual

```bash
gulp nombre_tarea

```


o utilizar npm para ejecutar cualquiera de las tres tareas principales:



**npm run gulp-development**

Ejecuta las tareas en modo desarrollo.

- *html*
  - Realiza includes de los targets development.
- *css*  
  - Crear sourcemaps para facilitar el desarrollo, procesa sass en modo
    "expanded"  para facilitar la lectura del código css, añade prefijos y notofica de los errores en el archivo. Revisa el css en busca de errores si lintcss está activo.
- *js*
  - Revisa el código javascript en busca de errores.
- *img*
  - traslada las imagenes pero no las comprime.
- *work*
  - Abre la url del servidor y observa cambios en html,css,js y imagenes para ejecutar las tareas correspondientes.



**npm run gulp-production**

Ejecuta las tarea en modo producción

- *cleanAll*
  - elimia todos los archivos de la carpeta /dist
- *html*
  - Realiza includes de los targets :dist (production) y elimina los espacios en blanco del html.
- *css*
  - Processa sass, añade prefijos css, limpia y comprime el código css y renombra el archivo resultante con el sufijo .min
- *js*
  - Revisa el código, concatena los archivos javscript, renombra el archivo resultante como script.min.js, lo comprime y notifica la finalización.
- *img*
  - Comprime las imagenes y las traslada a la carpeta /dist/img.



**npm run watch**

Ejecuta la tarea *work* para observar si tenemos cambios en el código.



***



####Comandos npm

Algunos comandos útiles para trabajar con la plantilla.



Comprueba si existen versiones más actuales de los modulos instalados

```bash
npm outdate
```


Actualiza a los módulos a sus versiones más recientes

```bash
npm update
```


Actualiza el módulo nombrado

```bash
npm update nombre_modulo
```


Deinstala el módulo nombrado

```bash
npm uninstall nombre_modulo
```



***



##Estructura

La Estructura de carpetas:

- **doc**
- **gulp**
  - **task**
    - clean.js
    - images.js
    - index.js
    - html.js
    - scripts.js
    - styles.js
    - watch.js
  - config.js
- **src**
  - **img**
  - **include**
  - **js**
  - **sass**
  - index.html
- .babelrc
- .gitignore
- .jshintrc
- .stylelintrc
- gulpfile.babel.js
- human.txt
- package.json
- README.md
- robots.txt


