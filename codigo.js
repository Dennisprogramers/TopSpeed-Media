nombre = prompt("Escribe tu nombre aqui")
    
    var saludo = "";
    var tiempo = new Date().getHours();

if(tiempo < 12){
    saludo = "Buenos dias espero tengas un lindo dia ";
}else if(tiempo < 18){
    saludo ="Buenas tardes ";
}else{
    saludo = "Buenas noches! es hora de relajarse ";
}
document.write(saludo + nombre)

alert("Hola " + nombre + "! TopSpeed-Media te da una cordial bienvenida ")