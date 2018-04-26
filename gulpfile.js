var gulp = require('gulp');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
gulp.task('minifycss', function () {
    gulp.src('style.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'));
});
gulp.task('sass', function () {
  return gulp.src('style/styles.sass')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./style/'));
});