'use strict';

var gulp = require('gulp');
var guldencoreTasks = require('guldencore-build');

guldencoreTasks('message');

gulp.task('default', ['lint', 'coverage']);
