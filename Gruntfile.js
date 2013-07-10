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
      files: ['less/*.less'],
      tasks: ['less:development'],
      options: {
        interval: 20
      },
      all: {
        files: ['*', '!less/*.less'],
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