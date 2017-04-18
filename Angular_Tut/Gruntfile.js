module.exports = function (grunt) {
    // load Grunt plugins from NPM
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // configure plugins
    grunt.initConfig({
        uglify: {
            out: {
                files: { 'app/Scripts/Mins/app.min.js': ['app/Scripts/app.js'] }
            },
        },

        watch: {
            scripts: {
                files: ['app/Scripts/**/*.js', "app/Scripts/app.js"],
                tasks: ['uglify']
            } 
        }
    });

    // define tasks
    grunt.registerTask('default', ['uglify', 'watch']);
};