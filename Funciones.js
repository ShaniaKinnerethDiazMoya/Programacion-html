function calcularEdad(AnioActual){
	alert("Tu edad es " + (2023-AnioActual) + " años");
	
}
function saludar(nombre){
	alert("Hola mundo " + nombre + " desde Javascript");
}
function variable(){
	/*
	hay 3 formas de declarar una variable 
	1)var: Declarar variables pero permite una redeclaracion
		Ejem: var edad = 19;
		      var edad = 20;
		NOTA: En la actualidad su uso es poco frecuente 
	*/
	var edad = 19;
	var edad = 20;
	console.log("edad= " + edad);
	/*
	2)let: No permite uns redeclaracion en un mismo scope 
	*/
	let salario =10000
	if(true){
	let salario = 15000
	console.log("Tu salario es:$" + salario)
	}
	console.log("Ty salario es:$" + salario)
	/*
	3) const:Declara una constante y un valor que no cambia
	*/
	const IVA = 16;	
	const PI = 3.1416;

	console.log("const IVA = " + (IVA+1));
	console.log("const PI = " + (IVA-0.5));
}
function entradaSalidaDatos(){
	//Entrada por teclado 
	let horasTrabajadas = prompt ("Ingresa horas trabajadas")
	let salarioPorHora = prompt ("Ingrese el salario por hora")

	//salida por pantalla 
	alert("el salario del trabajador es de $" + (salarioPorHora*horasTrabajadas))
}
function hotel(){
	//Entrada por teclado 
	let nd = prompt ("Ingresa dias de hospedaje")
	let pd = prompt ("Ingrese el costo del dia")

	if(nd<=5){
		alert("Tu subtotal es: $" + (nd*pd))
		alert("Tu descuento es de:$0")
		alert("Tu costo total es: $" + (nd*pd))
	}

	if(nd>5 & nd<=10){
		alert("Tu subtotal es: $" + (nd*pd))
		alert("Tu descuento es de:$" + (nd*pd*.1))
		alert("Tu costo total es: $" + (nd*pd*.9))
	}
	if(nd>10 & nd<=15){
		alert("Tu subtotal es: $" + (nd*pd))
		alert("Tu descuento es de:$" + (nd*pd*.15))
		alert("Tu costo total es: $" + (nd*pd*.85))
	}
	if(nd>15){
		alert("Tu subtotal es: $" + (nd*pd))
		alert("Tu descuento es de:$" + (nd*pd*.2))
		alert("Tu costo total es: $" + (nd*pd*.80))
	}
}
