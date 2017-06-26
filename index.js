
var assert= require('assert')

function Ejercicios(){
  this.area_rec=function(x,y){
  return x*y;

  }
  this.edad_persona=function(nombre,dia,mes,anio){
      this.nombre=nombre;
      this.dia=dia;
      this.mes=mes;
      this.anio=anio;
      var today = new Date();
      var anio_actual = today.getFullYear();
      var mes_actual = today.getMonth();
      var dia_actual = today.getUTCDate();
      var edad;

      if ( mes_actual>=mes && dia_actual>=this.dia){
        edad=anio_actual-anio;
      }else{
        edad=anio_actual-anio-1;
      }
      return(edad);

  }

  function Persona(nombre, edad, pasatiempos) {
       this.nombre = nombre;
       this.edad = edad;
       this.pasatiempos = pasatiempos;
       this.imprimir = function hablar(){
         return ("hola soy " + this.nombre + " tengo " + this.edad + " años y me gusta " + this.pasatiempos);
       };
     }

}
var area_rec=new Ejercicios();
var edad_p=new Ejercicios();
// Area de un triangulo
describe("Area_rectangulo",function(){
  it ('debe retornar 30',function(){
    assert.equal(30,area_rec.area_rec(5,6));
  })
});
// edad actual de una persona
describe("Edad actual de una persona",function(){
  it ('debe retornar 22 años',function(){
    assert.equal(22,edad_p.edad_persona('Evelyn',12,7,1994));
  })
});

// ejercicio numero 3
describe('Ejercicio de Objetos, Ejercicio 3', function(){
     it('edad de la persona ', function(){
       assert.equal("hola soy camilo tengo 22 años y me gusta patinar,bailar", primeraPersona.imprimir());
     });
   });
