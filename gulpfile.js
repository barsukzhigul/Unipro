let gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    cssmin = require('gulp-cssmin');

gulp.task('sass', function () {
    return gulp.src('sass/**/style.sass')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(rename({suffix: '.min'}))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions']
        }))
        .pipe(gulp.dest('build/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('media', function () {
    return gulp.src('sass/**/media.sass')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(rename({suffix: '.min'}))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions']
        }))
        .pipe(gulp.dest('build/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('style', function(){
    return gulp.src([
        'node_modules/normalize.css/normalize.css',
    ])
        .pipe(concat('normalize.min.css'))
        .pipe(cssmin())
        .pipe(gulp.dest('build/css'))
})

gulp.task('script', function(){
    return gulp.src('build/js/main.js')
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build/js'))
});

gulp.task('html', function () {
    return gulp.src('build/*.html')
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "build/"
        }
    });
});

gulp.task('watch', function () {
    gulp.watch('sass/**/*.sass', gulp.parallel('sass'))
    gulp.watch('build/*.html', gulp.parallel('html'))
    gulp.watch('build/js/main.js', gulp.parallel('script'))
});

gulp.task('default', gulp.parallel('style', 'media', 'sass', 'script', 'watch', 'browser-sync'))