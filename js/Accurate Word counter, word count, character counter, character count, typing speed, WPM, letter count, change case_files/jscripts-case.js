// JavaScript Document
//Protected, DO NOT COPY , WORDCOUNTERTOOL.COM //
<!--
// JavaScript Document
//Protected, DO NOT COPY , WORDCOUNTERTOOL.COM //
<!--
var paste=0;
var len=0;
var t;
var milisec=0;
 var seconds=0;
 var minutes=0;
 //document.FormWordCounter.d2.value='00:00:00';
 var timerOn=0;

function WordCounter(txt){


s = txt.value;
if (s.length == 0){
	len = 0;
}else{
   m1 = s.replace(/\s/g,'+');
   m = m1.replace(/^\s/g,'+');
   len = countWords(m);
}
document.FormWordCounter.TextCharCount.value = s.length;
document.FormWordCounter.TextCounter.value = len;

}

function startTimer(){

 milisec+=1;
 if (milisec >=9){
    milisec=0
    seconds+=1
 }
 if (seconds > 59){
        minutes+=1
        seconds=0;
 }
    if (minutes < 10){
        minDisplay = "0"+minutes;
    }else{
    	minDisplay=minutes;
    }
    if (seconds < 10){
    	secDisplay ="0"+seconds;
    }else{
    	secDisplay=seconds;
    	}
    document.FormWordCounter.d2.value=minDisplay+":"+secDisplay+":"+milisec;
    t= setTimeout("startTimer()",100)

}

function clearTimer(){
 milisec=0;
  seconds=0;
  minutes=0;
 document.FormWordCounter.d2.value='00:00:00';
}

function clearAll(){
  document.FormWordCounter.TextCharCount.value=0;
  document.FormWordCounter.TextCounter.value=0;
  document.FormWordCounter.txtInput.value="";
}

function countWords(str){

	str1 = str.replace(/\+*$/gi,"");
	str2 = str1.replace(/\++/g,' ');
	var temp = new Array();
	temp = str2.split(' ');
	return temp.length;
}

function changeLower()
	{
    document.FormWordCounter.txtInput.value = document.FormWordCounter.txtInput.value.toLowerCase();
}

	
function changeUpper() 

{
    document.FormWordCounter.txtInput.value = document.FormWordCounter.txtInput.value.toUpperCase();
}