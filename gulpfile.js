var gulp = require('gulp')
var sourcemaps = require('gulp-sourcemaps')
var source = require('vinyl-source-stream')
var buffer = require('vinyl-buffer')
var browserify = require('browserify')
var watchify = require('watchify')
var reactify = require('reactify')
var server = require('gulp-server-livereload')
var mocha = require('gulp-mocha')
var sass = require('gulp-sass')

function compile(watch) {
  var bundler = watchify(browserify({
    entries:'./src/js/index.js',
    debug: true,
    transform :[reactify]
  }))

  function rebundle() {
    bundler.bundle()
      .on('error', function(err) { console.error(err); this.emit('end') })
      .pipe(source('./build.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('build/js'))
  }

  if (watch) {
    bundler.on('update', function() {
      console.log('-> bundling...')
      rebundle()
    })
  }

  rebundle()
  bundleCss()
}

function bundleCss(){
  gulp.src('./src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('build/css'))
}

function watch() {
  return compile(true)
}

function test(){
  return gulp.src('./tests/*.js', {read: false})
  .pipe(mocha({reporter: 'nyan'}))
}

function serve(){
  gulp.src('.')
  .pipe(server({
    port: 8080,
    path:'/index.html',
    livereload: true,
    directoryListing: true,
    open: true,
    defaultFile: 'index.html'
  }))
}

gulp.task('build', compile)
gulp.task('watch', watch)
gulp.task('test', test)
gulp.task('serve', serve)

//if you don't load files, you don't need a local server
//gulp.task('default', ['watch'])

gulp.task('default', ['watch', 'serve'])
