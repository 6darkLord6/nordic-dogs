
var $razas=new Array();
$razas[0]="Perro de Groenlandia";
$razas[1]="Samoyedo";
$razas[2]="Husky siberiano";
$razas[3]="Alaskan malamute";
$razas[4]="Elkhound noruego";
$razas[5]="Cazador de alces noruego negro";
$razas[6]="Lundehund noruego";
$razas[7]="Laika Ruso-Europeo";
$razas[8]="Laika de Siberia Oriental";
$razas[9]="Jamthund";
$razas[10]="Spitz de Norrbotten";
$razas[11]="Perro de osos de Carelia";
$razas[12]="Spitz finlandés";
$razas[13]="Pastor islandés";
$razas[14]="Buhund noruego";
$razas[15]="Vallhund sueco";
$razas[16]="Pastor de Laponia";
$razas[17]="Finlandés de Laponia";

function cargarMenu(){
  $razas.forEach(function(entry) {
    $('#ulRazas').append('<li><a href="#">'+entry+"</a></li>");
  });
}
