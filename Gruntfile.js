module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            dist: {
                files: {
                    'resources/js/app.min.js': 'resources/js/app/app.js'
                }
            }
        },
        jshint: {
            files: ['Gruntfile.js', 'resources/js/app/*.js'],
            options: {
                // options here to override JSHint defaults
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        },
        concat: {
            css: {
                src: ['resources/style/font-awesome.css', 'resources/style/bootstrap.css', 'resources/style/animate.css', 'resources/style/style.css', 'resources/style/respons.css'],
                dest: 'resources/app.css'
            },
            js: {
                src: ['resources/js/jquery.js', 'resources/js/jquery-appear.js', 'resources/js/jquery-nicescroll.js', 'resources/js/app.min.js'],
                dest: 'resources/app.min.js'
            }
        },
        cssmin: {
            css:{ 
                files: {
                  'resources/app.min.css': 'resources/app.css'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    
    grunt.registerTask('default', ['jshint', 'uglify', 'concat', 'cssmin']);

};