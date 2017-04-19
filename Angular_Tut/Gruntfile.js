module.exports = function (grunt) {
    // load Grunt plugins from NPM
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // configure plugins
    grunt.initConfig({
        uglify: {
            out: {
                files:
                    {
                        'app/app.bundle.min.js':
                            [
                                'Scripts/jquery-3.1.1.min.js',
                                'Scripts/bootstrap.min.js',
                                'Scripts/angular.min.js',

                                'app/**/*.module.js',
                                'app/phone-list/phone-list.component.js'
                            ]
                    }
            },
        },

        watch: {
            scripts: {
                files: ['app/app.module.js', 'app/phone-list/*.js'],
                tasks: ['uglify']
            }
        }
    });

    // define tasks
    grunt.registerTask('default', ['uglify', 'watch']);
    grunt.registerTask('watchFiles', ['watch']);
    grunt.registerTask('uglifyFiles', ['uglify']);
};