function fun(){

createfrm();

}
function createfrm(){
const div = document.createElement("div");
const lname= document.createElement("LABEL");
const iname= document.createElement("input");

const ldegree= document.createElement("LABEL");
const idegree= document.createElement("input");

const lcgpa= document.createElement("LABEL");
const icgpa= document.createElement("input");

const del=document.createElement("button");
del.className = "btn-lg bg-danger";
del.addEventListener("click",delfun);
del.innerHTML="Remove";

lname.innerHTML="Name:";
ldegree.innerHTML="Degree:";
lcgpa.innerHTML="Cgpa:";

iname.placeholder="Name Here";
idegree.placeholder="Degree Here";
icgpa.placeholder="Cgpa Here";

div.className="form-group";
iname.className="form-control";

idegree.className="form-control";

icgpa.className="form-control";

div.appendChild(lname);
div.appendChild(iname);
div.appendChild(ldegree);
div.appendChild(idegree);
div.appendChild(lcgpa);
div.appendChild(icgpa);
div.appendChild(del);
document.forms["frm"].appendChild(div);

}
function delfun(){
    x=this.parentElement;
    x.remove();
}