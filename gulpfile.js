var gulp = require("gulp");
var less = require("gulp-less");
var minify = require("gulp-minify-css");
var watch = require("gulp-watch");


gulp.task('css',function(){
	gulp.src("./src/less/*.less")
	.pipe(watch("./src/less/*.less"))
	.pipe(less())
	.pipe(minify())
	.pipe(gulp.dest("./dist/css/"));

});

gulp.task("default",['css'],function(){
	console.log("运行gulp........");
});