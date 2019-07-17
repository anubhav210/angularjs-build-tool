module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        ngAnnotate: {
            options: {
                singleQuotes: true
            },
            // app: { //"app" target
            //     files: {
            //         './public/min-safe/js/appFactory.js': ['./public/js/appFactory.js'],
            //         './public/min-safe/js/FormController.js': ['./public/js/FormController.js'],
            //         './public/min-safe/app.js': ['./public/js/app.js']
                   

            //     }
            // },
            all: {
                files: [
                    {
                        expand: true,
                        src: ['../compas/scripts/compas/**/*.js'],
                        flatten: true,
                        dest:"./annoted",
                        ext: '.js',
                        extDot: 'last'
                        
                    }
                ],
            },
        },
        concat: {
            js: { //target
                src: ['./annoted/*.js'],
                dest: './dist/build.js',
            }
        },
        uglify: {
            js: { //target
                src: ['./dist/build.js'],
                dest: './dist/build.min.js'
            }
        }



        //grunt task configuration will go here     
    });
    //load grunt task
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify-es');
    grunt.loadNpmTasks('grunt-ng-annotate');
    //register grunt default task
    grunt.registerTask('default', ['ngAnnotate', 'concat', 'uglify']);
}