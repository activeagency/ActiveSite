/**
 * Created by mattludwigs on 7/18/14.
 */
module.exports = function(grunt) {
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        files: {
          'style.css': 'main.scss'
        }
      }
    },

    exec: {
      run: {
        cmd: 'node server.js'
      },

      deploy: {
        cmd: 'git push heroku master'
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-exec');

  grunt.registerTask('default', []);
  grunt.registerTask('css', ['sass']);
  grunt.registerTask('deploy', ['exec:deploy']);
  grunt.registerTask('run', ['css', 'exec:run']);
};