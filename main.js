//ajax call creation
function jsondata(file,callback) {
  var xhr=new XMLHttpRequest();
xhr.overrideMimeType("appilication/json");
xhr.open("GET",file,true);
xhr.onreadystatechange=function() {
if (xhr.readyState === 4 && xhr.status === 200 ){
  callback(xhr.responseText);
}
};
xhr.send();
}
//function calling
jsondata("data.json",function(text) {
let data= JSON.parse(text);
console.log(data);
ba(data.basics);
educa(data.Education);
skill(data.skills);
})
//main div class calling from html
// var main=document.querySelector('main');
var main=document.querySelector(".main");
//left div creation
var left=document.createElement("div");
left.classList.add("left");
//id for left div
left.setAttribute("id","left");
//appending main div
main.appendChild(left);
function ba(basic){
  //creation of img
var img=document.createElement("img");
img.src=basic.photo;
left.appendChild(img);
//name creation
var name=document.createElement("h1");
name.textContent=basic.name;
left.appendChild(name);
//creating email
var mail=document.createElement("p");
mail.textContent=basic.email;
left.appendChild(mail);
//mobile appending
var mb=document.createElement("h4");
mb.textContent=basic.mobile;
mail.appendChild(mb);

}
//right div creation
var right=document.createElement("div");
right.classList.add("right");
main.appendChild(right);
//education div creation
var edu=document.createElement("h1");
edu.textContent="education details:";
edu.appendChild(document.createElement("HR"));
right.appendChild(edu);
//function calling
function educa(education) {
  for (i in education) {
  var e1=document.createElement("div");
  e1.classList.add("edu1");
  e1.textContent=education[i].course;
  //list creation
  var ul=document.createElement("ul");
  ul.classList.add("edu2");
  for(j in education[i].college){
    var li=document.createElement("li");
    li.textContent=education[i].college[j];
    edu.appendChild(e1);
    e1.appendChild(ul);
    ul.appendChild(li);
  }
  }
}
// skills function calling
function skill(skills) {
  var skills_title=document.createElement("h1");
  skills_title.textContent="Skills Set:";
//appending skills_title
right.appendChild(skills_title);
var table=document.createElement("table");
// skills_title.appendChild(document.createElement(HR))
table.classList.add("table");
skills_title.appendChild(table);
var row="";
for (var i=0; i<skills.length; i++) {
  row+="<tr><td>"+skills[i].name+"</td><td>"+skills[i].value+"</td><tr>";
}
table.innerHTML=row;


}
