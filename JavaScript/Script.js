const text = document.getElementById("text1");
const circle = document.getElementById("circle");

BreathIn();

function BreathIn(){
	text.innerText = "Breath In";
	circle.className = "circle breathIn";

	setTimeout(()=>{
		HoldBreath();
	}, 2000);
}

function HoldBreath(){
	text.innerText = "Hold Breath!";
	circle.className = "circle holdBreath";

	setTimeout(()=>{
		BreathOut();
	}, 1000);

}



function BreathOut(){
	text.innerText = "Breath Out";
	circle.className = "circle breathOut";
	
	setTimeout(() => {
		BreathIn();
	}, 2000);

}
