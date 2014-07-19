/**
 * Created by mattludwigs on 7/18/14.
 */
module.exports = function(grunt) {
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        files: {
          'cssmian.css': 'main.scss'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', []);
  grunt.registerTask('css', ['sass']);
};