/*=============================================
=            Archivo para variables            =
=============================================*/
/*----------  
rutas de los archivos  
----------*/
const paths = {

    css: {
        src: 'src/sass/**/*.scss',
        dest: 'dist/css'
    },
    scripts: {
        src: 'src/js/*.js',
        vendor: 'src/js/vendor/*.js',
        dest: 'dist/js/',
        destvendor: 'dist/js/vendor/'
    },
    image: {
        src: 'src/img/**/*',
        dest: 'dist/img'
    },
    html: {
        src: 'src/**/*.html',
        dest: 'dist/*.html'
    }
};

/*----------  
Diferenciar entre entorno de producción o desarrollo
La variable recoje el valor dado por terminal NODE_ENV=production
por defecto lo establece en development
----------*/
const environment = process.env.NODE_ENV || 'development';

/*----------
Activar o desactivar stylelint en la tarea css false|desactiva true|activa
----------*/
const lintcss = false;

/*----------  
url del servidor local  
----------*/
const server = {
    urlProject: 'http://localhost/IniCio/dist'
};

/*----------  
variables para processhtml(includes html)  
----------*/
const targets = {
    dist: {
        environment: 'dist',
        /* en data puedo pasar todas las variables que quiera disponibles en html */       
        data: {
            assets: 'dist'
        }
    },
    dev: {
        environment: 'dev',
        data: {
            assets: 'src'
        }
    }

}
/*----------  
Opciones de configuración de los plugins  
----------*/
const options = {
    autoprefixer: {
        browsers: [
            "last 2 version",
            "safari 5",
            "ie 9",
            "opera 12.1",
            "ios 6",
            "android 4"
        ]

    },
    imagemin: {
        interlaced: true,
        progressive: true,
        optimizationLevel: 5,
        svgoPlugins: [{ removeViewBox: true }]
    },
    cssnano: {
        discardComments: true,
        uniqueSelectors: true

    },
    processhtmlDev: {
        recursive: true,
        process: true,
        strip: true,
        environment: targets.dev.environment,
        data: targets.dev.data

    },
    processhtmlProd: {
        recursive: true,
        process: true,
        strip: true,
        environment: targets.dist.environment,
        data: targets.dist.data

    },
    stylelint: {
    	reporters: [{
    		formatter: 'string', 
    		console: true
    	}]
    }


}

/*----------  
Exporto las variables para hacerlas accesibles desde las tareas  
----------*/
exports.paths = paths;
exports.server = server;
exports.options = options;
exports.targets = targets;
exports.environment = environment;
exports.lintcss = lintcss;