'use strict'

var gulp = require('gulp')
var sass = require('gulp-sass')

gulp.task('sass', function () {
    return gulp.src('./src/assets/scss/*.scss').
        pipe(sass.sync().on('error', sass.logError)).
        pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError)).
        pipe(gulp.dest('./dist/assets/css'))
})

gulp.task('sass:watch', function () {
    gulp.watch('./src/assets/scss/*.scss', ['sass'])
})
