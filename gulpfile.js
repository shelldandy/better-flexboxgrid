'use strict';

var gulp    = require('gulp'),
    sass    = require('gulp-sass');


gulp.task('sass', function () {
  return gulp.src('./src/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function() {
  gulp.watch('./src/*.sass', ['sass']);
});

gulp.task('default', ['sass','watch']);
