p1_name= localStorage.getItem("player1_name");
p2_name= localStorage.getItem("player2_name");

p1_score=0;
p2_score=0;

document.getElementById("player1_name").innerHTML=p1_name;
document.getElementById("player2_name").innerHTML=p2_name;

document.getElementById("player1_score").innerHTML=p1_score;
document.getElementById("player2_score").innerHTML=p2_score;

document.getElementById("qturn").innerHTML="Question Turn: "+p1_name;
document.getElementById("aturn").innerHTML="Answer Turn: "+p2_name;
