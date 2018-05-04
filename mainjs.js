let flag=0;
function hovereffect(){
let dp=document.getElementsByClassName("ohalf")[0];
let dppic=document.getElementsByClassName("dp")[0];

let one=document.getElementsByClassName("one")[0];
let two=document.getElementsByClassName("two")[0];
let three=document.getElementsByClassName("three")[0];
if(flag==1)
{
dppic.classList.add("bounce");
dp.classList.remove("dptrans2");
one.classList.remove('onetrans2');
two.classList.remove('twotrans2');
three.classList.remove('threetrans2');
dp.classList.add("dptrans1");
one.classList.add('onetrans1');
two.classList.add('onetrans1');
three.classList.add('onetrans1');
flag=0;

	}
	else{
		dppic.classList.remove("bounce");
		dp.classList.remove("dptrans1");
		one.classList.remove('onetrans1');
		two.classList.remove('onetrans1');
		three.classList.remove('onetrans1');
		dp.classList.add("dptrans2");
		one.classList.add('onetrans2');
		two.classList.add('twotrans2');
		three.classList.add('threetrans2');
		flag=1;
	}


}