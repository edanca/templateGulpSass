const gulp          = require('gulp');
const browserSync   = require('browser-sync');
const sass          = require('gulp-sass');
const autoprefixer  = require('gulp-autoprefixer');

// Compile Sass & Inject Into Broser
gulp.task('sass', function() {
    return gulp.src(['src\\sass\\*.sass'])
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest("src\\css"))
        .pipe(browserSync.stream());
});

// Watch Sass & Serve
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: "./src"
    });

    gulp.watch(['src/sass/*.sass'], ['sass']);
    gulp.watch("src/*.html").on('change', browserSync.reload);
});

// Default Task
gulp.task('default', ['serve']);