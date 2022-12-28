const gulp        = require('gulp');
const browserSync = require('browser-sync');
const watch = require('browser-sync');
const sass = require('gulp-sass')(require('sass'));
const rename = require("gulp-rename");
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

// Static server
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('sass', function(){
    return gulp.src("sass/**/*.+(scss|sass)")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer({
            cascade: false 
        }))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("css"))
        .pipe(browserSync.stream());
        
})

gulp.task('watch', function(){
    gulp.watch("sass/**/*.+(scss|sass)", gulp.parallel('sass'))
    gulp.watch("./**/*.html").on("change", browserSync.reload)
})

gulp.task('default', gulp.parallel('watch','server', 'sass'))
