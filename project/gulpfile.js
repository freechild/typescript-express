const gulp = require('gulp');
const gutil = require('gulp-util');
const clean = require('gulp-clean');
const ts = require('gulp-typescript');
const tsProject = ts.createProject("tsconfig.json");
const tslint = require("gulp-tslint");

const DIR = {
    SRC: 'src',
    BIN: 'bin',
    APP: 'app',

}

const SRC = {
    SERVER: DIR.BIN+"/**/*.ts",
}

const DEST = {
    SERVER: DIR.APP + "/",
}

//default
gulp.task('default',['clean','lint','build','watch'],()=>{    
    gutil.log('gulp is running')
});


//server compile
gulp.task('lint',()=>{    
    return gulp.src( SRC.SERVER )
        .pipe( tslint.report({
            summarizeFailureOutput: true
        }))        
})

//app compile
gulp.task('build', ()=>{
    return gulp.src( SRC.SERVER )
        .pipe(tsProject())
        .js.pipe(gulp.dest(DEST.SERVER))
})



//server old file clean
gulp.task('clean', ()=>{
    return gulp.src(DEST.SERVER +"*" ,{
        read:false
    })
    .pipe(clean());
})

// gulp watch
gulp.task('watch', () => {
    console.log("it's work it cause to change the file")
    
    let watcher = {
        
        // server: gulp.watch(SRC.SERVER,['server']),
        build: gulp.watch(SRC.SERVER,['lint','build']),
    }
})