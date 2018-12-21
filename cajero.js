
function entregarDinero(){
	var t = document.getElementById("dinero");
	dinero = parseInt(t.value);
	for (var bi of caja){

		if (dinero>0){

			div = Math.floor(dinero/bi.valor);
			
			if (div>bi.cantidad){
				papeles = bi.cantidad;
			}

			else {
				papeles = div;
			}

			entregado.push(new Billete(bi.valor,papeles));
			dinero = dinero - (bi.valor*papeles);
		}
	}
	if (dinero>0){
		r.innerHTML = "El monto no esta disponible <br />";
	}
	else {
		for (var e of entregado){
			if (e.cantidad>0){
				r.innerHTML += e.cantidad+ " billetes de $"+e.valor+ "<br />";
			}
		}
	}
}


var caja = [];
var entregado = [];
caja.push( new Billete(100,10));
caja.push( new Billete(5,30));
caja.push( new Billete(500,20));
var div;
var dinero;
var papeles;
var r = document.getElementById("resultado")
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);