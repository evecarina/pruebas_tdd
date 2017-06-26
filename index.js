
var assert= require('assert')

function Area(){
  this.area_rec=function(x,y){
  return x*y;

  }
  this.edad_persona=function(){

  }
}
var area_rec=new Area();

describe("Area_rectangulo",function(){
  it ('debe retornar 30',function(){
    assert.equal(20,area_rec.area_rec(5,6));
  })
});
