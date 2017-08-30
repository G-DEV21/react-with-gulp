var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer');
    babel = require("gulp-babel"),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat')
    del = require('del'),
    run = require('gulp-run'),
    csslint = require('gulp-csslint'),
    cssmin = require('gulp-minify-css'),
    browserify = require('browserify'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    jshint = require('gulp-jshint'),
    eslint = require('gulp-eslint'),
    browserSync = require('browser-sync'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    reactify = require('reactify'),
    package = require('./package.json'),
;

var appConfig = {
    paths : {
        src: './src/',
        dist: '.public/',
    }
};

var jsFiles = {
    vendor: [
    ],
    source: [
        appConfig.paths.src + 'index.js',
        appConfig.paths. + 'scripts/**/*.js',

    ]
}

/**
 * Run Bower Update
 */
gulp.task('bower', function() {
    run('bower install').exec();
})

/**
 * JS/JSX files lint
 */
gulp.task('jslint', function() {
    return gulp.src(jsFiles.source)
        .pipe(eslint({
            baseConfig: {
                "ecmaFeatures": {
                   "jsx": true
                 }
            }
        }))
        .pipe(eslint.format())
    .pipe(eslint.failAfterError());
})

gulp.task('scripts', ['jslint'], function() {
    return 
})

gulp.task('csslint', function() {

})

gulp.task('cssmin', function() {

})

gulp.task('styles', ['wiredep'], function() {
    
})

gulp.task('default', () => {
    return gulp.src('js/main.js')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015','react']
        }))
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('build'));
})

gulp.task('watch', function () {
    gulp.watch('js/*.js', ['default']);
});