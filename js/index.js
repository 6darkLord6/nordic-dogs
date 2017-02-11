var $dogs = new Array();

function inicializar(){
  for (var i = 0; i < $dogs.length; i++) {
    $dogs[i]=new Array(3);
  }
}

function createHexRazas(){
  var li = '<li class="hex"> <div class="hexIn"> <a class="hexLink" href="#"> <img src="https://farm9.staticflickr.com/8461/8048823381_0fbc2d8efb.jpg" alt="" /> <h1>This is a title</h1> <p>Some sample text about the article this hexagon leads to</p></a> </div> </li>';
  $('#hexGrid').append(li);
}
