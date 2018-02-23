var gulp = require('gulp')
var gutil = require('gulp-util')
var ts = require('gulp-typescript')
var tsProject = ts.createProject("tsconfig.json")


const DIR = {
    SRC: 'src',
    BIN: 'bin',
    CONFIG: 'config',
    DEST: 'dist',
    App_DEST: 'app',
    APP_SRC: 'app_src',
}

const SRC = {
    SERVER: DIR.BIN+"/*.ts",
    APP: DIR.APP_SRC +"/**/*.ts",
}

const DEST = {
    SERVER: DIR.CONFIG + "/",
    APP: DIR.App_DEST + "/",
}

//default
gulp.task('default',['app','watch'],()=>{    
    gutil.log('gulp is running')
});


//server compile
gulp.task('server',()=>{
    return gulp.src( SRC.SERVER )
        .pipe(tsProject())
        .js.pipe(gulp.dest( DEST.SERVER ));
})

//app compile
gulp.task('app',()=>{
    return gulp.src( SRC.APP )
        .pipe(tsProject())
        .js.pipe(gulp.dest( DEST.APP ));
})

//server old file clean
gulp.task('clean', ()=>{
    return gulp.src(DIR.CONFIG +"/*" ,{
        read:false
    })
    .pipe(clean());
})

// gulp watch
gulp.task('watch', () => {
    console.log("it's work it cause to change the file")
    
    let watcher = {
        
        // server: gulp.watch(SRC.SERVER,['server']),
        app: gulp.watch(SRC.APP,['app']),
    }
})