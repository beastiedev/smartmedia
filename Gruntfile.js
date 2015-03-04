module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      files: ['*.js']
    },
    jslint: {
    	client: {
            src: ['*.js'],
            exclude: ['Gruntfile.js']
        }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jslint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint', 'jslint']);

};