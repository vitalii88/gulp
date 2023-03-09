const { src, dest, watch, parallel, series } = require('gulp');

const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const clean = require('gulp-clean');


function styles() {
  return src('app/scss/style.scss')
    .pipe(autoprefixer({ overrideBrowserslist: ['last 10 version'] }))
    .pipe(scss())
    .pipe(dest('app/css'))
    .pipe(browserSync.stream());
}
function stylesMin() {
  return src('app/scss/style.scss')
    .pipe(autoprefixer({ overrideBrowserslist: ['last 10 version'] }))
    .pipe(concat('style.min.css'))
    .pipe(scss({ outputStyle: 'compressed' }))
    .pipe(dest('app/css'))
    .pipe(browserSync.stream());
}

//
// Если нужно подключить все JS файлы из каталога кроме, к примеру, app.min.js
// А так же пример для установленного swiper через npm
//   return src([
//     'node_modules/swiper/swiper-bundle.js',
//     'app/js/**/*.js',
//     '!app/js/app.min.js',
//   ])
function scriptsMin() {
  return src([
    'app/js/main.js',
  ])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(dest('app/js'))
    .pipe(browserSync.stream());
}

function watching() {
  watch(['app/scss/style.scss'], stylesMin)
  watch(['app/js/main.js'], scriptsMin)
  watch(['app/**/*.html']).on('change', browserSync.reload)
}

function browsersync() {
  browserSync.init({
    server: {
      baseDir: 'app/'
    }
  });
}

function cleanDist() {
  return src('dist')
    .pipe(clean());
}

function building() {
  return src([
      'app/css/style.min.css',
      'app/css/style.css',
      'app/js/main.min.js',
      'app/**/*.html'
    ], { base: 'app'})
    .pipe(dest('dist'));
}

exports.styles = styles;
exports.stylesMin = stylesMin;
exports.scriptsMin = scriptsMin;
exports.watching = watching;
exports.browsersync = browsersync;
exports.cleanDist = cleanDist;
exports.build = series(cleanDist, building);

exports.default = parallel(styles, stylesMin, scriptsMin, browsersync, watching);
