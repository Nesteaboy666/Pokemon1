// JavaScript source code
//var pokedex = {};
//const number ={"1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"}
//const name = { "Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod",
              // "Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate"}

//const type ={"grass, poison","grass, poison","grass, poison","fire","fire","fire, fly", "water","water","water","bug","bug","bug, fly", "bug, poison",
             // "bug, poison", "bug, poison", "normal, fly", "normal, fly", "normal, fly","normal","normal"}

//const region = {"global","global","global","global","global","global","global","global","global","global",
                //"global","global","global","global","global","global","global","global","global","global",}

//const rarity = {"4","5","6","4","5","6","4","5","6","1","3","4","1","3","4","1","3","4","1","4"}

//const evoltion = {"1","2","3", "1","2","3","1","2","3","1","2","3","1","2","3","1","2","3","1","2"}

//function getPokemon(i) {
  //let pokemonName = name;
 //let pokemonType = type;
  //let pokemonRegion = region;
  //let pokemonRarity = rarity;
 // let pokemonEvolution = evolution;
 // for( i=1;i<20;i++){
	//pokedex[i] = {"name" : pokemonName, "type": pokemonType, "region": pokemonRegion, "rarity": pokemonRarity, "evoltion": pokemonEvolution}
   // }
   // }
const pokemons =[
    {index:'1', name:'Bulbasaur',type:'Grass, poison',region:'Global',rarity:'4', evolution:'1'},
    {index:'2', name:'Ivysaur',type:'Grass, poison',region:'Global',rarity:'5',evolution:'2'},
    {index:'3', name:'Venusaur',type:'Grass, poison',region:'Global',rarity:'6',evolution:'3'},
    {index:'4', name:'Charmander',type:'Fire',region:'Global',rarity:'4',evolution:'1'},
    {index:'5', name:'Charmeleon',type:'Fire',region:'Global',rarity:'5',evolution:'2'},
    {index:'6', name:'Charizard',type:'Fire, fly',region:'Global',rarity:'6',evolution:'3'},

    {index:'7', name:'Squirtle',type:'Water',region:'Global',rarity:'4',evolution:'1'},
    {index:'8', name:'Wartortle',type:'Water',region:'Global',rarity:'5',evolution:'2'},
    {index:'9', name:'Blastoise',type:'Water',region:'Global',rarity:'6',evolution:'3'},
    {index:'10', name:'Caterpie',type:'Bug',region:'Global',rarity:'1',evolution:'1'},
    {index:'11', name:'Metapod',type:'Bug',region:'Global',rarity:'3',evolution:'2'},
    {index:'12', name:'Butterfree',type:'Bug, fly',region:'Global',rarity:'4',evolution:'3'},

    {index:'13', name:'Weedle',type:'Bug, poison',region:'Global',rarity:'1',evolution:'1'},
    {index:'14', name:'Kakuna',type:'Bug, poison',region:'Global',rarity:'3',evolution:'2'},
    {index:'15', name:'Beedrill',type:'Bug, poison',region:'Global',rarity:'4',evolution:'3'},
    {index:'16', name:'Pidgey',type:'Normal, fly',region:'Global',rarity:'1',evolution:'1'},
    {index:'17', name:'Pidgeotto',type:'Normal, fly',region:'Global',rarity:'3',evolution:'2'},
    {index:'18', name:'Pidgeot',type:'Normal, fly',region:'Global',rarity:'4',evolution:'3'},

    {index:'19', name:'Ratta',type:'Normal',region:'Global',rarity:'1',evolution:'1'},
    {index:'20', name:'Raticate',type:'Normal',region:'Global',rarity:'4',evolution:'2'},
    ]



function searchNumber(){
var inputNum;
inputNum = parseFloat( document.getElementById("myInputNum").value);
  console.log(inputNum);
  if (isNaN(inputNum)) {
        alert("only can input number");
  }
  if (inputNum<0||inputNum>20) {
        alert("out of range");
  }
for(i=0;i<pokemons.length;i++) {
if (inputNum==pokemons[i].index) {
    alert(" name:" + pokemons[i].name + "\n type:"+ pokemons[i].type + "\n region:" + pokemons[i].region
    + "\n rarity" + pokemons[i].rarity + "\n evolution:"+ pokemons[i].evolution);
    break;
}

}

}
function searchName(){
    var input;
    var inputNum2;
    input = document.getElementById("myInput").value;
    inputNum2 = parseFloat( document.getElementById("myInputNum").value);
    console.log(input);
   if (!isNaN(input)) {
        alert("only can input string");
  }
  if (input.length>20 || input.length<0) {
  alert("the character should less than 20 or more 0");
  }
    for (i = 0; i < pokemons.length; i++) {
        if(input==pokemons[i].name) {
         alert(" name:" + pokemons[i].name + "\n type:"+ pokemons[i].type + "\n region:" + pokemons[i].region
    + "\n rarity" + pokemons[i].rarity + "\n evolution:"+ pokemons[i].evolution);
    break;
        }
           
        
    }
}