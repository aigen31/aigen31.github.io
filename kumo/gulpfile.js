// global
var gulp = require('gulp');

// sass
var sass = require('gulp-sass');

// functional
var browserSync = require('browser-sync'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    del = require('del'),
    cache = require('gulp-cache');

// optimizetion, compress
var csso = require('gulp-csso'),
    uglify = require('gulp-uglify'),
    autoprefixer = require('gulp-autoprefixer'),
    imagemin = require('gulp-imagemin'),
    imageminJpegRecompress = require('imagemin-jpeg-recompress'),
    imageminPngquant = require('imagemin-pngquant');


// global tasks
gulp.task('sass', function() {
    return gulp.src(['app/sass/**/*.sass', 'app/sass/**/*.scss'])
        .pipe(sass({
            outputStyle: 'expanded'
        }).on('error', sass.logError))
        .pipe(autoprefixer({
            cascade: true
        }))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream:true}))
});

gulp.task('browser-sync', function() {
    browserSync({
        server: { // Определяем параметры сервера
            baseDir: 'app' // Директория для сервера - app, ссылка на сервер - параметр 'proxy: "site_name"'
        },
        notify: false
    });
});


//minification
gulp.task('minifyjs', function() { // .js
    return gulp.src([
        'app/js/common.js',
        'app/libs/jquery.vide.js/jquery.vide.js' // files
    ])
    .pipe(concat('script.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('app/js'))
    .pipe(browserSync.reload({stream:true}))
});

gulp.task('minifycss', function() { // .css
    return gulp.src('app/sass/*.sass') // files
        .pipe(sass())
        .pipe(csso())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream:true}))
});


// images
gulp.task('compress', async function() { // image compression
    return gulp.src('app/img/**/*')
    .pipe(imagemin([
        imagemin.gifsicle({interlaced: true}),
        imageminJpegRecompress({
            progressive: true,
            max: 80,
            min: 70
        }),
        imageminPngquant(),
        imagemin.svgo({plugins: [{removeViewBox: true}]})
        ]))
    .pipe(gulp.dest('dist/img'))
});

gulp.task('clear', async function() { // cache clear
    return cache.clearAll()
});


// build
gulp.task('prebuild', async function() { // uploading files

    var buildCSS = gulp.src([
        'app/css/*.css',
    ])
    .pipe(gulp.dest('dist/css'));

    var buildFonts = gulp.src(
        'app/fonts/**/**'
    )
    .pipe(gulp.dest('dist/fonts'));

    var buildJS = gulp.src([
        'app/js/**/*'
    ])
    .pipe(gulp.dest('dist/js'));

    var buildPHP = gulp.src(
        'app/*.php',
        'app/components/*.php'
    )
    .pipe(gulp.dest('dist'));

    var buildBG = gulp.src(
        'app/bg/**/*'
    )
    .pipe(gulp.dest('dist/bg'));

    var buildHTML = gulp.src(
        'app/*.html'
    )
    .pipe(gulp.dest('dist'));
});
gulp.task('clean', async function() { // build cleaner
    return del.sync('dist')
});


// watch
gulp.task('watch', function() {
    gulp.watch('app/sass/**/*.sass', gulp.parallel('css-libs'))
    gulp.watch('app/*.html').on('change', function () {
        browserSync.reload();
    });
    gulp.watch(['app/js/common.js', 'app/libs/**/*.js'], gulp.parallel('minifyjs')).on('change', function () {
        browserSync.reload();
    });
    gulp.watch('app/libs/**/*.js', gulp.parallel('minifyjs')).on('change', function () {
        browserSync.reload();
    });
    gulp.watch('app/*.php').on('change', function () {
        browserSync.reload();
    });
    gulp.watch('app/components/*.php').on('change', function () {
        browserSync.reload();
    });
});


// unification
gulp.task('css-libs', gulp.series('sass', 'minifycss'));
gulp.task('build', gulp.series('css-libs', 'minifyjs', 'clean', 'compress', (gulp.parallel([
    'sass', 'prebuild'
]))));
gulp.task('default', gulp.parallel('watch', 'browser-sync', 'css-libs', 'minifyjs'));
