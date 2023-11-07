//Menu lateral
var menu_visible = false;
let menu = document.getElementById('nav');
function mostrarOcultarMenu() {
  if (menu_visible == false) {
    //si esta oculto
    menu.style.display = 'block';
    menu_visible = true;
  } else {
    menu.style.display = 'none';
    menu_visible = false;
  }
}
//oculto el menu una vez que selecciono una opción
let links = document.querySelectorAll('nav a');
for (var x = 0; x < links.length; x++) {
  links[x].onclick = function () {
    menu.style.display = 'none';
    menu_visible = false;
  };
}

//Creo las barritas de una barra particular identificada por su id
function crearBarra(id_barra) {
  for (i = 0; i <= 16; i++) {
    let div = document.createElement('div');
    div.className = 'e';
    id_barra.appendChild(div);
  }
}

//selecciono todas las barras generales par aluego manipularlas
let html = document.getElementById('html');
crearBarra(html);
let javascript = document.getElementById('javascript');
crearBarra(javascript);
let git = document.getElementById('git');
crearBarra(git);
let sql = document.getElementById('sql');
crearBarra(sql);
let agile = document.getElementById('agile');
crearBarra(agile);
let lean = document.getElementById('lean');
crearBarra(lean);

//Ahora voy a guardar la cantidad de barritas que se van a ir pintando por cada barar
//para eso utilizo un arreglo, cada posiciòn pertenece a un elemento
//comienzan en -1 porque no tiene ninguna pintada al iniciarse
let contadores = [-1, -1, -1, -1, -1, -1];
//esta variable la voy a utilizar de bandera para saber si ya ejecuto la animación
let entro = false;

//función que aplica las animaciones de la habilidades
function efectoHabilidades() {
  var habilidades = document.getElementById('habilidades');
  var distancia_skills =
    window.innerHeight - habilidades.getBoundingClientRect().top;
  if (distancia_skills >= 300 && entro == false) {
    entro = true;
    const intervalHtml = setInterval(function () {
      pintarBarra(html, 16, 0, intervalHtml);
    }, 100);
    const intervalJavascript = setInterval(function () {
      pintarBarra(javascript, 11, 1, intervalJavascript);
    }, 100);
    const intervalgit = setInterval(function () {
      pintarBarra(git, 14, 2, intervalgit);
    }, 100);
    const intervalsql = setInterval(function () {
      pintarBarra(sql, 15, 3, intervalsql);
    }, 100);
    const intervalagile = setInterval(function () {
      pintarBarra(agile, 16, 4, intervalagile);
    }, 100);
    const intervallean = setInterval(function () {
      pintarBarra(lean, 17, 5, intervallean);
    }, 100);
  }
}

//lleno una barra particular con la cantidad indicada
function pintarBarra(id_barra, cantidad, indice, interval) {
  contadores[indice]++;
  x = contadores[indice];
  if (x < cantidad) {
    let elementos = id_barra.getElementsByClassName('e');
    elementos[x].style.backgroundColor = '#940253';
  } else {
    clearInterval(interval);
  }
}

//detecto el scrolling del mouse para aplicar la animación de la barra
window.onscroll = function () {
  efectoHabilidades();
};
