let gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
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

gulp.task('style', function(){
    return gulp.src([
        'node_modules/normalize.css/normalize.css',
    ])
        .pipe(concat('normalize.min.css'))
        .pipe(cssmin())
        .pipe(gulp.dest('build/css'))
})

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
});

gulp.task('default', gulp.parallel('style', 'sass', 'watch', 'browser-sync'))