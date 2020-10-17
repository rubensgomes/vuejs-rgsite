const gulp = require('gulp');
const del = require('del');
const merge = require('merge-stream');
const sass = require('gulp-sass');
const browsersync = require('browser-sync');

// --- >>> Clean Tasks <<< ---

function clean() {
    return del([
        'dist',
        'report.*.json',
        'resources/css'
    ]);
}

clean.description = 'Delete generated files.';

function cleanProj() {
    return del([
        '.project',
        '.settings/'
    ]);
}

cleanProj.description = 'Delete IDE files.';

// --- >>> Sass Tasks <<< ---

function scss() {
    return gulp.src('./resources/sass/**/*.scss')
               .pipe(sass().on('error', sass.logError))
               .pipe(gulp.dest('./public/css'))
               .pipe(gulp.dest('./resources/css'));
}

scss.description = 'Saas transpiles SCSS files to CSS.';

function scssWatch() {
    return gulp.watch('./resources/sass/**/*.scss', scss);
}

scssWatch.description = 'Watches for SCSS files and transpile changed SCSS files.';

// --- >>> Browsersync Tasks <<< ---

function browser() {

    const BROWSERSYNC_FILES = ['./**/*'];
    var sync = browsersync.create();

    sync.init({
        browser: 'chrome',
        files: BROWSERSYNC_FILES,
        server: {
            baseDir: './resources'
        }
    });

    return gulp.watch('./resources/*.html', sync.reload);
}

browser.description = 'Watches static file changes and reloads browser.';

// --- >>> Copy Tasks <<< ---

function installImg() {
    var stream1 =  gulp.src('./resources/favicon.ico')
                       .pipe(gulp.dest('./public', { 'mode': '0644' }));
    var stream2 = gulp.src('./resources/img/hero-img.png')
                      .pipe(gulp.dest('./public/img', { 'mode': '0644' }));

    return merge(stream1, stream2);
}

installImg.description = 'Installs the image files in the public folder.';

function installJs() {
    return gulp.src('./resources/js/*.js')
               .pipe(gulp.dest('./public/js', { 'mode': '0644' }));
}

installJs.description = 'Installs the Javascript files in the public folder.';

// ----------------------------------------------------------------- //

exports.browser = browser;
exports.clean = clean;
exports.clobber = gulp.series(cleanProj, clean);
exports.install = gulp.series(installImg, installJs, scss);
exports.sass = scss;
exports.watch = scssWatch;
