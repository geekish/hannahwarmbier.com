var gulp = require('gulp');
var gulpClean = require('gulp-clean');
var gulpConcat = require('gulp-concat');
var gulpConnect = require('gulp-connect');
var gulpPostcss = require('gulp-postcss');
var gulpRename = require('gulp-rename');
var gulpSass = require('gulp-sass');
var gulpUglify = require('gulp-uglify');

var cssnano = require('cssnano');
var path = require('path');

gulp.task('build:js', function () {
  return gulp.src([
    './node_modules/jquery/dist/jquery.min.js',
    './node_modules/tether/dist/tether.min.js',
    './node_modules/bootstrap/dist/js/bootstrap.min.js',
    './assets/js/main.js',
  ])
    .pipe(gulpConcat('main.js'))
    .pipe(gulpUglify())
    .pipe(gulp.dest('./public/js'))
    .pipe(gulpConnect.reload())
    ;
});

gulp.task('watch:js', function () {
  gulp.watch('./assets/js/**/*.js', ['build:js']);
});

gulp.task('build:sass', function () {
  return gulp.src('./assets/sass/style.scss')
    .pipe(gulpSass({
      includePaths: [
        './node_modules/bootstrap/scss'
      ],
      outputStyle: 'nested'
    }).on('error', gulpSass.logError))
    .pipe(gulpPostcss([
      cssnano()
    ]))
    .pipe(gulp.dest('./public/css'))
    .pipe(gulpConnect.reload())
    ;
});

gulp.task('watch:sass', function () {
  gulp.watch('./assets/sass/**/*.scss', ['build:sass']);
});

gulp.task('reload', function () {
  gulpConnect.reload();
});

gulp.task('watch:html', function () {
  gulp.watch('./public/index.html', ['reload']);
});

gulp.task('build', ['build:js', 'build:sass']);
gulp.task('watch', ['watch:js', 'watch:sass', 'watch:html']);

gulp.task('serve', function () {
  gulpConnect.server({
    port: 8080,
    root: './public',
    livereload: true
  });
});

gulp.task('default', ['build', 'serve', 'watch']);
