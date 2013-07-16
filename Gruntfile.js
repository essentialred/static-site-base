module.exports = function(grunt) {

  /*-------------------------------------------- */
  /** Project Config */
  /*-------------------------------------------- */
  var lessOptionsPaths = ['less'],
    lessFiles = {
      'css/style.css': 'less/style.less'
    };

  grunt.initConfig({
    
    watch: {
      options: {
        interval: 20
      },
      less: {
        files: ['less/*.less'],
        tasks: ['less:development'],
      },
      all: {
        files: ['*/**', '!node_modules/*/**', '!less/*.less'],
        options: {
          livereload: true
        }
      },
    },

    less: {

      development: {
        options: {
          paths: lessOptionsPaths
        },
        files: lessFiles
      },

      production: {
        options: {
          paths: lessOptionsPaths,
          yuicompress: true
        },
        files: lessFiles
      }
    }
  });

  /*-------------------------------------------- */
  /** Tasks */
  /*-------------------------------------------- */
  
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
};