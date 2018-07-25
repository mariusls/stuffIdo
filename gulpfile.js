//////////////////////////////////////////////////
/*
    Frontend gulp setup for sass compiling, minification and moving html/css/js/images/fonts to dist folder

    Make sure npm packages are installed

    Root-path must be correct in gulp-config.js

    Tasks:
        'build-dist' - compiles sass to css and moves it to dist folder along with javascript, html, images and fonts, both custom and vendors
        'clean-dist' - deletes dist folder
        'build-minify' - minifies css and js, both custom and vendors
        'build-full' - cleanes dist first, then builds it and minifies css and js
        'live-dev' - clean and build fresh dist before spinning up localhost with browsersync
*/
//////////////////////////////////////////////////

var configFrontend = require('./gulp-config.js')();

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
var rename = require('gulp-rename');
var runSequence = require('run-sequence');
var jsImport = require('gulp-js-import');
var deleteDist = require('del');
var handleBarsInclude = require('gulp-handlebars-file-include'); 
var handleBarsGlobalContext = {};

gulp.task('browserSync', function(){
    browserSync.init({
        server: {
            baseDir: configFrontend.dist
        },
    });
});

function swallowError (error) {
    console.log(error.toString())

    this.emit('end')
}

function endOnError(err) {
    if (vstsDebug === true) {
        console.log("Fatal error occured - we are breaking all GULP scripts - it has to be fixed first!");

        try {

            console.log(err.toString());

        } catch (err) {

            console.log('Failed ');

        }
        
        process.exit(1);
        this.emit('end');
    }
}


gulp.task('build-dist', function(done) {
    console.log("---");
    console.log("---    Building dist folder...    ---");
    console.log("---");
    runSequence('sass-dist-custom', 'sass-dist-vendors', 'js-dist-custom', 'js-dist-vendors', 'fonts-dist-vendors', 'images-dist', 'html-dist-handlebars', function() {
        done();
    });
});

gulp.task('clean-dist', function() {
    console.log("---");
    console.log("---    Cleaning dist..     ---")
    console.log("---");
    return deleteDist.sync('dist');
});

gulp.task('build-minify', function(done) {
    console.log("---");
    console.log("---     Minifying CSS and JS     ---");
    console.log("---");
    runSequence('minify-css-custom', 'minify-css-vendors', 'minify-js-custom', 'minify-js-vendors', function() {
        done();
    });
});

gulp.task('build-full', function(done) {
    runSequence('clean-dist', 'build-dist', 'build-minify', function() {
        done();
        console.log("---");
        console.log("---    Full build completed!   ---");
        console.log("---");
    });
});

// WATCHER
gulp.task('live-dev', ['clean-dist', 'build-dist', 'browserSync'], function() {

    gulp.watch(configFrontend.src + '/scss/*.scss', ['sass-dist-custom']);
    gulp.watch(configFrontend.src + '/markup/**/*.html', ['html-dist-handlebars']);
    gulp.watch(configFrontend.src + '/js/*.js', ['js-dist-custom']);
    gulp.watch(configFrontend.assets + '/*.scss', ['sass-dist-vendors']);
    gulp.watch(configFrontend.assets + '/*.js', ['js-dist-vendors']);
    //gulp.watch(configFrontend.dist +  '/js/**/*.js', browserSync.reload);
    gulp.watch(configFrontend.dist + '/*.html').on('change', browserSync.reload);
})

// / / / / MOVE TO DIST // / / / /

// HTML
gulp.task('html-dist-handlebars', function() {

    var options = {
        maxRecursion: 20
    };

    return gulp.src(configFrontend.src + '/markup/*.html')
        .pipe(handleBarsInclude(handleBarsGlobalContext, options))
        .pipe(gulp.dest(configFrontend.dist))
        .on('error', function (err) {
            endOnError(err);
        })
        .pipe(browserSync.stream())
});

// Custom SCSS files
gulp.task('sass-dist-custom', function(){
    return gulp.src(configFrontend.src + '/scss/main.scss')
        .pipe(sass())
        .on('error', swallowError)
        .pipe(gulp.dest(configFrontend.dist + '/css'))
        .pipe(browserSync.stream())
});

// Vendors SCSS files
gulp.task('sass-dist-vendors', function() {
    return gulp.src(configFrontend.assets + '/vendors.scss')
        .pipe(sass())
        .pipe(gulp.dest(configFrontend.dist + '/css'))
        .on('error', function (err) {
            endOnError(err);
        })
        .pipe(browserSync.stream())
});

// Custom JS files
gulp.task('js-dist-custom', function() {
    return gulp.src(configFrontend.src +  '/js/scripts.js')
        .pipe(jsImport({ hideConsole: true }))
        .pipe(gulp.dest(configFrontend.dist + '/js'))
        .on('error', function (err) {
            endOnError(err);
        })
        .pipe(browserSync.stream())
});

// Vendors JS files
gulp.task('js-dist-vendors', function() {
    return gulp.src(configFrontend.assets + '/vendors.js')
        .pipe(jsImport({hideConsole: true}))
        .pipe(gulp.dest(configFrontend.dist + '/js'))
        .on('error', function (err) {
            endOnError(err);
        })
        .pipe(browserSync.stream())
});

// Vendors fonts 
gulp.task('fonts-dist-vendors', function() {
    return gulp.src(configFrontend.assets + '/fonts/**/*')
        .pipe(gulp.dest(configFrontend.dist + '/fonts'))
});

// Images 
gulp.task('images-dist', function() {
    return gulp.src([configFrontend.src + '/images/**/*', configFrontend.assets + '/images/**/*'])
        .pipe(gulp.dest(configFrontend.dist + '/images'))
});


// / / / / MINIFYING // / / / /

// Custom css file
gulp.task('minify-css-custom', function() {
    return gulp.src(configFrontend.dist + '/css/main.css')
        .pipe(cssnano())
        .pipe(rename({ suffix: '.min'}))
        .pipe(gulp.dest(configFrontend.dist + '/css'))
});

// Vendors CSS file
gulp.task('minify-css-vendors', function() {
    gulp.src(configFrontend.dist + '/css/vendors.css')
        .pipe(cssnano())
        .pipe(rename({ suffix: '.min'}))
        .pipe(gulp.dest(configFrontend.dist + '/css'))
});

// Custom JS file
gulp.task('minify-js-custom', function() {
    return gulp.src(configFrontend.dist + '/js/scripts.js')
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(configFrontend.dist + '/js'))
});

// Vendors JS file
gulp.task('minify-js-vendors', function() {
    return gulp.src(configFrontend.dist + '/js/vendors.js')
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(configFrontend.dist + '/js'))
});