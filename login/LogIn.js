var email="vijay@gmail.com";
var password="123";
function fun()
{
   var usergivenUSID= document.getElementById("emailinput").value
   var usergivenUSP=document.getElementById("passinput").value
   if(email!=usergivenUSID&&password==usergivenUSP)
   {
      document.getElementById("buttoninput").setAttribute("type","text")
      document.getElementById("emailinput").style.borderColor="red"
      document.getElementById("main").style.backgroundImage="linear-gradient(90deg,red,purple)"
      document.getElementById("passinput").style.borderColor="blue"
      document.getElementById("msg").innerHTML="Wrong EmailId"
      document.getElementById("msg").style.color="red"
   }
   else if(email==usergivenUSID&&password==usergivenUSP)
   {
      document.getElementById("emailinput").style.borderColor="blue"
      document.getElementById("passinput").style.borderColor="blue"
      document.getElementById("main").style.backgroundImage="linear-gradient(90deg,hotpink,purple)"
      document.getElementById("buttoninput").setAttribute("type","submit")
      var fom=document.forms;
      fom[0].action="file:///D:/WebTechnology/JavaScript/AdvertiseAdd.html"
   }
   else if(email==usergivenUSID&&password!=usergivenUSP)
   {
      document.getElementById("buttoninput").setAttribute("type","text")
      document.getElementById("passinput").style.borderColor="red"
      document.getElementById("main").style.backgroundImage="linear-gradient(90deg,purple,red)"
      document.getElementById("emailinput").style.borderColor="blue"
      document.getElementById("msg").innerHTML="Wrong password"
      document.getElementById("msg").style.color="red"
   }
   else
   {
      document.getElementById("buttoninput").setAttribute("type","text")
      document.getElementById("passinput").style.borderColor="red"
      document.getElementById("emailinput").style.borderColor="red"
      document.getElementById("main").style.backgroundImage="linear-gradient(90deg,red,red)"
      document.getElementById("msg").innerHTML="Wrong EmailId & password"
      document.getElementById("msg").style.color="red"
   }
}
function visib()
{
   document.getElementById("passinput").setAttribute("type","text")
   document.getElementById("imgclo").setAttribute("src","D:\WebTechnology\JavaScript\login\monkeyclose.png")
   document.getElementById("imgclo").style.transform="rotateY(360deg)"
   document.getElementById("imgclo").style.transition="transform 0.1s"
}
function hides()
{
   document.getElementById("passinput").setAttribute("type","password")
   document.getElementById("imgclo").setAttribute("src","../Astronut/ASSET/IMAGE/monkeyclose.png")
   document.getElementById("imgclo").style.transform="rotateY(-360deg)"
   document.getElementById("imgclo").style.transition="transform 0.1s"
}