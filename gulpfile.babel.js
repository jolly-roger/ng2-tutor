'use strict';

import gulp from 'gulp';
import uglify from 'gulp-uglify';
import sourcemaps from 'gulp-sourcemaps';
import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import clean from 'gulp-clean';


gulp.task('browserify', ['clear'], () => {
    return browserify('index.js', {
            debug: true,
            basedir: 'src/web'
        })
        .transform(babelify, {presets: ["es2015", "angular2"]})
        .bundle()
        .pipe(source('index.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'));
});

gulp.task('clear', () => {
    return gulp.src('dist', {read: false})
        .pipe(clean());
});

gulp.task('html', ['browserify'], () => {
    return gulp.src('src/web/**/*.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('copy', ['html']);

gulp.task('default', ['copy']);