var mas=["2+2", "6", "3", "4", "0",
		"2+1", "6", "3", "4", "0",
		"2-2", "6", "3", "4", "0"];
var rans=[3, 2, 4];
amount_of_answers = rans.length;
k=0;
minutes=0;
answer = -1;
counter_of_right_answers = 0;
percentage_ratio = 0;
percentage_ratio_f = 0;
counter_of_false_answers = 0;

function start(){
	knopka.style.display= "none";

	ans1.style.display= "block";
	ans2.style.display= "block";
	ans3.style.display= "block";
	ans4.style.display= "block";
	time.style.display= "block";

	ques.innerText = mas[0];
	ans1.innerText = mas[1];
	ans2.innerText = mas[2];
	ans3.innerText = mas[3];
	ans4.innerText = mas[4];
	k++;
	t=0;
tajmer();
}

function test(n){
if (k==3){
	ans1.style.display= "none";
	ans2.style.display= "none";
	ans3.style.display= "none";
	ans4.style.display= "none";
	ques.style.display= "none";
	setTimeout(counter, 2000);			
}	
if (k<4){

answer=n;

if (answer == rans[k-1]){
	counter_of_right_answers++;
}

ques.innerText = mas[k*5];
ans1.innerText = mas[k*5+1];
ans2.innerText = mas[k*5+2];
ans3.innerText = mas[k*5+3];
ans4.innerText = mas[k*5+4];
k++;

}
}

function tajmer(){
	if (minutes!=0) {
		timer_m.innerHTML = minutes +" хв.";
	}
	timer.innerHTML = t +" с.";

	t++;
	if (t>=60) {
		for (;t>=60;){
			minutes++;
			t=t-60;		
		}
}
	if(k==4){
		return 0;
	}
	setTimeout(tajmer, 1000);

}
function counter(){
	percentage_ratio = counter_of_right_answers/amount_of_answers * 100;
	percentage_ratio = percentage_ratio.toFixed(1);
	percentage_ratio_f = 100-percentage_ratio;
	counter_of_false_answers = rans.length - counter_of_right_answers;
	result.style.display='block';
	time.style.fontSize="22px";
	ratio.style.display="block";
	ratio.innerHTML= "Правильні відповіді: " + percentage_ratio + "%";
	amount_of_right.innerHTML = "Кількість правильних відповідей: " + counter_of_right_answers;
	amount_of_false.innerHTML = "Кількість хибних відповідей: " + counter_of_false_answers;
	amount_of_right.style.display= "block";
	amount_of_false.style.display= "block";
}
