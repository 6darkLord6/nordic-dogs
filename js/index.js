function inicializar(){
  $(document).ready(function(){
    var $path = "'content/razas/dog.html?id=";
    var $close = "')";
    for (var i = 0; i < 5; i++) {
    var $title = eval('titleDog'+(i+parseInt(1)));
      var $info = eval('infoDog'+(i+parseInt(1)));
      var $img = "img/index/dog"+(i+parseInt(1))+".png" ;
      var li = '<li class="hex"> <div class="hexIn"> <a class="hexLink" href="#" onclick="redirigir('+$path+(i+parseInt(1))+$close+'"> <img src='+$img+' alt="" /> <h1>'+$title+'</h1> <p>'+$info+'</p></a> </div> </li>';
      $('#hexGrid').append(li);
    }
    }
  );
}
