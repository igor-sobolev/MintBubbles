const gulp = require('gulp');
const stylus = require('gulp-stylus');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const rename = require('gulp-rename');
const del = require('del');
const gulpBrowser = require('gulp-browser');

gulp.task('clean', function () {
  return del(['build']);
});

gulp.task('js', ['clean'], function () {
  return gulp.src('./src/**/*.js')
    .pipe(babel({
      presets: ['es2015'],
      plugins: ['transform-custom-element-classes',
        'transform-es2015-classes']
    }))
    .pipe(gulpBrowser.browserify())
    .pipe(concat('bundle.js'))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./build/js'));
});

gulp.task('css', ['clean'], function () {
  return gulp.src('./src/**/*.styl')
    .pipe(stylus({
      compress: true
    }))
    .pipe(concat('bundle.css'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./build/css'));
});

gulp.task('watch', function () {
  gulp.watch('./src/**/*', ['build']);
});

gulp.task('build', ['js', 'css']);
gulp.task('default', ['build']);