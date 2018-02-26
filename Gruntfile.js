module.exports = function (grunt) {
  
  grunt.registerTask('yell',function(){
      console.log('I am yelling')
  })  
  grunt.registerTask('shot', function(){
      console.log('I am shotting');
  })

  grunt.registerTask('default',['yell','shot'])
}



