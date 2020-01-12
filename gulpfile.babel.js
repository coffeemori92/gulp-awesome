import gulp from 'gulp';
import gPug from 'gulp-pug';
import del from 'del';

const routes = {
    pug: {
        src: 'src/*.pug',
        dest: 'build'
    }
}

const pug = () => {
    return gulp
            .src(routes.pug.src)
            .pipe(gPug())
            .pipe(gulp.dest(routes.pug.dest));
}

const clean = () => {
    return del(['build']);
}

const prepare = gulp.series([clean]);

const assets = gulp.series([pug]);

export const dev = gulp.series([prepare, assets]);