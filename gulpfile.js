var gulp = require('gulp'),
	babel = require('gulp-babel'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify');
var files = [
	//'src/test.js',
	//'src/test.jsx',
	'src/boil.js',
	'src/form.js',
	'src/app.js', 
];


gulp.task('react', function(){
	return gulp.src(files)
	.pipe(babel())
	.pipe(concat('main.js'))
	//.uglify()
	.pipe(gulp.dest('dist'));

});

gulp.task('default', ['react']);


gulp.task('watch', function(){
	gulp.watch('src/*.js', ['react']);
});
