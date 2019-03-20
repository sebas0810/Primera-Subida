const opciones={
	id:{
		demand:true, 
		alias:'i'
	},
	nombre:{
		demand:true,
		alias: 'n'
	},
	cedula:{
		demand: true, 
		alias:'c'
	}
}

const {Cursos} = require("./Datos");

const fs= require('fs');

const argv = require('yargs')
			.command('inscribir','Inscribirme en un curso', opciones)
			.argv

function imprension(Curso,callback){
	setTimeout(function(){
		let aux= 'El curso se llama '+Curso.nombre+' con ID de '+ Curso.id+' el cual tiene una duracion de '
			+Curso.duracion+ ' y un valor de '+ Curso.valor;
		callback(aux);
	},cont);
}

function Cursosimp(Cursos){
	cont=2000;
	for (var i = 0; i < Cursos.length; i++) {
			imprension(Cursos[i],function(aux){
				console.log(aux);
			});
			cont+=2000;
		}
}

let crearArchivo = (argv,Curso)=>{
	texto = "El estudiante "+ argv.n + " con cedula "+ argv.c + '\n'
			+"se ha matriculado en el curso "+ Curso.nombre+' con ID '+ Curso.id+'\n'
			+'el cual tiene una duracion de '+ Curso.duracion+ ' y un valor de '
			+ Curso.valor ;
	fs.writeFile('Registro.txt', texto, (error)=>{
		if(error) throw (error);
		console.log('Se creo el archivo')
	});
}

if (argv._[0] == 'inscribir') {
	let Encontrar = Cursos.find(Curid => Curid.id == argv.i);
	if (Encontrar) {
		crearArchivo(argv,Encontrar);
	}else{
		console.log('No se encontro curso con el ID:' + argv.i);
		Cursosimp(Cursos);
	}
}else{
	Cursosimp(Cursos);
}