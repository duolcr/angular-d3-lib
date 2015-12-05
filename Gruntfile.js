"use strict";

module.exports = function(grunt) {

  grunt.initConfig({
  	config: {
  		src: "src",
  		test: "test"
  	},
    jshint: {
      files: ['src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    watch: {
    	js: {
	      files: ['<%= jshint.files %>'],
	      tasks: ['jshint'],
	      options: {
	      	livereload: true
	      }
    	},
    	livereload: {
    		options: {
    			livereload: '<%= connect.options.livereload %>'
    		},
    		files: [
    			'<%= config.src %>/{,*/}*.html',
    			'<%= config.src %>/images/{,*/}*'
    		]
    	}
    },
    copy: {
    	main:{
    		files: [
    			{ src: "bower_components/**/*.js", dest: "tmp/"}
    		]
    	}
    },
    karma: {
    	unit: {
    		configFile: "<%= config.test %>/karma.conf.js"
    	}
    },
    connect: {
    	options: {
    		port:8608,
    		livereload: 35729,
    		hostname: "localhost"
    	},
    	livereload: {
    		options: {
    			open: true,
    			base: [
    				"<%= config.src %>",
    				"tmp"
    			]
    		}
    	}
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-karma');

  grunt.registerTask('test', ['karma']);
  grunt.registerTask('serve', ['copy', 'connect:livereload', 'watch']);

};