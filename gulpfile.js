//Connect plugins
const gulp  = require('gulp');
const bs    = require('browser-sync').create();
const pug   = require('gulp-pug');
const sass  = require('gulp-sass')(require('sass'));
const clean = require('gulp-clean');


//Remove the build directory
gulp.task('clean', function () {
  return gulp.src('build', {read: true})
    .pipe(clean({force: true}))
  ;
});

//Compile html
gulp.task('templates:compile', function() {
  return gulp.src('source/templates/index.pug')
    .pipe(pug({pretty: true}))
    .pipe(gulp.dest('build'))
  ;
});

//Compile styles
gulp.task('styles:compile', function() {
  return gulp.src('source/styles/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('build/css'))
  ;
});

//Copy fonts
gulp.task('copy:fonts', function() {
  return gulp.src('source/fonts/**/*.*')
    .pipe(gulp.dest('build/fonts'))
  ;
});

//Copy images
gulp.task('copy:images', function() {
  return gulp.src('source/img/**/*.*')
    .pipe(gulp.dest('build/img'))
  ;
});

//Join all copy tasks into one
gulp.task('copy', gulp.parallel('copy:fonts', 'copy:images'));

//Remove the fonts directory
gulp.task('clean:fonts', function () {
  return gulp.src('build/fonts', {read: true})
    .pipe(clean({force: true}))
  ;
});

//Remove the images directory
gulp.task('clean:images', function () {
  return gulp.src('build/img', {read: true})
    .pipe(clean({force: true}))
  ;
});

//Build watchers
gulp.task('watch', function() {
  gulp.watch('build/**/*.*').on('change', bs.reload);

  gulp.watch('source/templates/**/*.pug', gulp.series('templates:compile'));
  gulp.watch('source/styles/**/*.scss', gulp.series('styles:compile'));
});

//Run server
gulp.task('serve', function() {
  bs.init({
    server: {baseDir: 'build'}
  });
});

//Build a project
gulp.task('default',
  gulp.series(
    'clean',
    gulp.parallel('templates:compile', 'styles:compile', 'copy'),
    gulp.parallel('watch', 'serve')
  )
);

//Start a project
gulp.task('start',
  gulp.series(
    gulp.parallel('templates:compile', 'styles:compile', 'copy'),
    gulp.parallel('watch', 'serve')
  )
);