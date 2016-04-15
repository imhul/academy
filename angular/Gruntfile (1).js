module.exports = function(grunt) {
    grunt.initConfig({
        clean: {
            js: {
                src: ['dest/js']
            },
            css: {
                src: ['dest/css']
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['app/js/app.component.js', 'app/js/main.js'],
                dest: 'dest/js/output.js'
            }
        },
        jshint: {
            options: {
                esversion: 6
            },
            beforeconcat: ['Gruntfile.js', 'app/js/**/*.js'],
            afterconcat: ['dest/js/output.js']
        },
        babel: {
            options: {
                presets: ['es2015']
            },
            dist: {
                files: {
                    'dest/js/output.js': 'dest/js/output.js'
                }
            }
        },
        uglify: {
            my_target: {
                files: {
                    'dest/js/output.min.js': 'dest/js/output.js'
                }
            }
        },
        less: {
            development: {
                files: {
                    'dest/css/style.css': 'app/styles/style.less'
                }
            }
        },
        watch: {
            js: {
                files: ['app/js/**/*.js'],
                tasks: ['build-js']
            },
            css: {
                files: ['app/styles/**/*.less'],
                tasks: ['build-css']
            }
        },
        postcss: {
            options: {
                processors: [
                    require('autoprefixer')({
                        browsers: ['last 2 versions']
                    })
                ]
            },
            dist: {
                src: 'dest/css/*.css'
            }
        }
    });

    require('load-grunt-tasks')(grunt);

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-postcss');

    grunt.registerTask('build-js', [
        'clean:js',
        'jshint:beforeconcat',
        'concat',
        'jshint:afterconcat',
        'babel',
        'uglify'
    ]);

    grunt.registerTask('build-css', [
        'clean:css',
        'less',
        'postcss:dist'
    ]);

    grunt.registerTask('default', [
        'build-css',
        'build-js'
    ]);
};
