
//// include plug-ins
//var jshint = require('gulp-jshint');

//// JS hint task
//gulp.task('jshint', function() {
//  gulp.src('./src/scripts/*.js')
//    .pipe(jshint())
//    .pipe(jshint.reporter('default'));
//});

// include gulp
var gulp = require('gulp'); 

gulp.task('default');
//gulp.task('default', ['hi'],function(){
//console.log("watch added");
//gulp.watch('./src/test.html', function() {
//    gulp.run('htmlwatch');
//  });});

gulp.task('hello', function() {
  console.log("hello mansi");
});

gulp.task('hi', function() {
  console.log("hi mansi");
});

gulp.task('htmlwatch', function() {
  console.log("watch called");
});

var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');

gulp.task('imagemin', function() {
  var imgSrc = './src/images/**/*',
      imgDst = './build/images';

  gulp.src(imgSrc)
    .pipe(changed(imgDst))
    .pipe(imagemin())
    .pipe(gulp.dest(imgDst));
});

var concat = require('gulp-concat');
var stripDebug = require('gulp-strip-debug');
var uglify = require('gulp-uglify');

// JS concat, strip debugging and minify
gulp.task('scripts', function() {
  gulp.src(['./src/scripts/*.js'])
    .pipe(concat('script.js'))
    .pipe(stripDebug())
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts/'));
});

var minifyCSS = require('gulp-minify-css');

// CSS concat and minify
gulp.task('styles', function() {
  gulp.src(['./src/styles/*.css'])
    .pipe(concat('styles.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./build/styles/'));
});