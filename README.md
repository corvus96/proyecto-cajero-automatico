# Uso BASICO de eventos y clases en javascript

El programa consta de:

1.  Un archivo .html
2.  Una imagen de un cajero para ilustrar
3.  El archivo billetes.js con la clase Billete
4.  Y El archivo cajero.js que carga con la lógica del programa 

### Para probar este codigo solo debes cargar el HTML en tu navegador de confianza
El archivo de interes es cajero.js, ya que la clase billete solo tiene unicamente un constructor con dos propiedades:
- valor: que asigna un valor al billete
- cantidad: asigna una cantidad de billetes disponible

cajero.html posee la imagen del cajero y dos <inputs/>:
  
  ```<input type="number" id="dinero"/>```
  
  ```<input type="button" value="Extraer" id="extraer" />```
  
Y en cajero.js se tiene un evento ```entregarDinero()``` que es activado cuando se hace click en el elemento extraer. 
