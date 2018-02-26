module.exports = function (grunt) {
    grunt.initConfig({
        componentbuild: {
           build: {
               output: './dist/',
               name: "scorpion",
               scripts: true
           }
        }
    })

    grunt.registerTask('yell', function () {
        console.log('I am yelling')
    })
    grunt.registerTask('shot', function () {
        console.log('I am shotting');
    })

    grunt.loadNpmTasks('grunt-component-build')
    grunt.registerTask('default', ['componentbuild'])
}