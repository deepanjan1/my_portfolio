/*
 After you have changed the settings under responsive_images
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      coverphoto: {
        options: {
          engine: 'im',
          sizes: [{
            /* min_width 851px */
            width: 851, 
            suffix: '_large_2x',
            quality: 60 /*hi resolution*/
          },{ 
            width: 851,
            suffix: '_large_1x',
            quality: 30 /*low resolution*/
          },{ 
            /* min_width 400px */
            width: 350,
            height: 157,
            suffix: '_small_2x',
            quality: 60, /*hi resolution*/
            aspectRatio: false,
            gravity: 'East'
          },{ 
            width: 350,
            height: 157,
            suffix: '_small_1x',
            quality: 30, /*low resolution*/
            aspectRatio: false,
            gravity: 'East'
          }]
        },

        /*
        You don't need to change this part if you don't change
        the directory structure.
        */
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images_src/coverphoto',
          dest: 'images/'
        }]
      }, 
      portfolio: {
        options: {
          engine: 'im',
          sizes: [{
            /* min_width 600px */
            width: 600,
            height: 282, 
            suffix: '_large_2x',
            quality: 100, /*hi resolution*/
            aspectRatio: false
          },{ 
            width: 600,
            height: 282, 
            suffix: '_large_1x',
            quality: 30, /*low resolution*/
            aspectRatio: false
          },{ 
            /* min_width 425px */
            width: 285,
            height: 150,
            suffix: '_small_2x',
            quality: 100, /*hi resolution*/
            aspectRatio: false,
          },{ 
            width: 285,
            height: 150,
            suffix: '_small_1x',
            quality: 30, /*low resolution*/
            aspectRatio: false,
          }]
        },

        /*
        You don't need to change this part if you don't change
        the directory structure.
        */
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images_src/',
          dest: 'images/'
        }]
      }

    },

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['images'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['images']
        },
      },
    },

  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['clean', 'mkdir', 'responsive_images']);

};
