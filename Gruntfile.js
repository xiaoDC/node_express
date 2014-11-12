module.exports = function(grunt) {

	var config = {
		uglify:{
			dynamic_mappings:{
				files: [
	        {
	          expand: true,     // Enable dynamic expansion.
	          cwd: 'dev/',      // Src matches are relative to this path.
	          src: ['**/*.js'], // Actual pattern(s) to match.
	          dest: 'public/js',   // Destination path prefix.
	          ext: '.min.js',   // Dest filepaths will have this extension.
	          extDot: 'first'   // Extensions in filenames begin after the first dot
	        },
	      ],
			},
		},
		sass:{
			dynamic_mappings:{
				files:[{
					expand: true,     // Enable dynamic expansion.
					cwd: 'public/css/src',      // Src matches are relative to this path.
					src: ['*.sass'], // Actual pattern(s) to match.
					dest: 'public/css/styles',   // Destination path prefix.
					ext: '.css',   // Dest filepaths will have this extension.
					extDot: 'first'   // Extensions in filenames begin after the first dot
				}]
			}
		},
		watch:{
			sass:{
				files:"**/*.sass",
				tasks:['sass']
			},
			js:{
				files:"dev/**/*.js",
				tasks:['uglify']
			},
		}
	};


	grunt.initConfig(config);
	// 加载提供"uglify"任务的插件
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

	// 默认任务
	grunt.registerTask('default', ['uglify', 'watch', 'sass']);

}