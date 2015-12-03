var mycharacter={
name:"Marksman",
abilities:"excellent markmanships, high intellegent, and always have tricks up his sleeve",
origin:"Frame by the gunslingers for robbing a bank, he was force to hide in the shadows and hunt down whoever involved in robbery and clear his name",
catchphrase:"Every target is just another target",
powerlevel:45000,
image:"http://codeparkhouston.com/hs-fall-2015/lesson-09/assets/marksman.jpg"};


var mycharacter2={
name:"Bacho",
abilities:"His guitar has a special unique power dwells with it, when bad guys hear his music, thier heads explode, animals can be lure and use them as advantage and also rocking his guitar",
origin:"",
catchphrase:"If every porkchop were perfect, we wouldn't have hotdogs",
powerlevel:45000,
image:"http://codeparkhouston.com/hs-fall-2015/lesson-09/assets/bacho.jpg"};


show(mycharacter);
show(mycharacter2);

function walljump(){
mycharacter.powerlevel=mycharacter.powerlevel -1;
}

function hello(){

	alert(mycharacter.catchphrase);
	alert(mycharacter2.catchphrase);
}