var Pelicula = function(titulo, año, actor, director){
    this.titulo = titulo || ("not available");
    this.año = año || ("not available");
    this.actor = actor || "not available";
    this.director = director || "not available";
}

var cujo = new Pelicula("cujo", 1990, "charles")


Pelicula.prototype.taquilla = "la rompio";

Pelicula.prototype.getaño = function(){
    return this.año
}

    


console.log(cujo)