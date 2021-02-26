function twoNum(){
var numB1=document.getElementById("num1").value;
var numB2=document.getElementById("num2").value;

if(numB1>numB2)
{
    document.getElementById("twoNum").innerHTML=numB1+" is greater then "+numB2;
}
else if(numB1<numB2)
{
    document.getElementById("twoNum").innerHTML=numB2+" is greater then "+numB1;
}
else
{
    document.getElementById("twoNum").innerHTML=numB2+" , "+numB1+" You enter same numbers";
}
}
function twoNum1(){
    var numB1=document.getElementById("num31").value;
    var numB2=document.getElementById("num32").value;
    var numB3=document.getElementById("num33").value;
    if(numB1>numB2 && numB1>numB3)
    {
        document.getElementById("threeNum").innerHTML=numB1+" is greater then "+numB2+" , "+numB3;
    }
    else if(numB2>numB1 && numB2>numB3)
    {
        document.getElementById("threeNum").innerHTML=numB2+" is greater then "+numB1+" , "+numB3;
    }
    else if(numB3>numB1 && numB3>numB2)
    {
        document.getElementById("threeNum").innerHTML=numB3+" is greater then "+numB1+" , "+numB2;
    }
    else
    {
        document.getElementById("threeNum").innerHTML=numB2+" , "+numB1+" , "+numB3+" You enter same numbers";
    }
    }
    function checkNum()
    {
        var a=document.getElementById("posiNum").value;
        
        if(a>0)
        {
            document.getElementById("posiResult").innerHTML=a+" is positive number"
        }
        else if(a<0)
        {
            document.getElementById("posiResult").innerHTML=a+" is negative number"
        }
        else
        {
           
        
            document.getElementById("posiResult").innerHTML="Entered number is zero"
        }
        
    }
    function divisibleCheck()
    {
        var divisi=document.getElementById("divisicheck").value
        console.log(divisi);
        if(divisi%5==0&& divisi!=0)
        {
            document.getElementById("divisiResult").innerHTML=divisi+" is divisible by 5";
        }
        else if(divisi%11==0&& divisi!=0)
        {
            document.getElementById("divisiResult").innerHTML=divisi+" is divisible by 11";
        }
        else if(divisi%5!=0 ||divisi%11!=0 )
        {
       
            document.getElementById("divisiResult").innerHTML=divisi+" is not divisible by 5,11";
        }
        else if(divisi=="")
        {
            document.getElementById("divisiResult").innerHTML="Here enter number";
        }
        else{
            document.getElementById("divisiResult").innerHTML=" entered number is zero";
        }
    }

function checkeven1()
{
    var even=document.getElementById("checkeven").value
    if(even%2==0 &&even!=0)
    {
        document.getElementById("Resulteven").innerHTML=even+" is even number"
    }
    else if(even%2!=0&&even!=0)
    {
        document.getElementById("Resulteven").innerHTML=even+" is odd number"
    }
   else if(even=="")
    {
        document.getElementById("Resulteven").innerHTML="here enter number"
    }
    else 
    {
        document.getElementById("Resulteven").innerHTML="Here entered number is zero"
    }
}

function leapyear()
{
    var result =document.getElementById("leap").value;
    
    if (result%4==0&&result!=0) {
     document.getElementById("year").innerHTML=result+" is leap year"; 
    }
   else if (result%4!=0&&result!=0) 
        
    
    {
        document.getElementById("year").innerHTML=result+" is not leap year";
    }
else if (result=="")
{
    document.getElementById("year").innerHTML=" please enter year";
}
else
{
    document.getElementById("year").innerHTML="you enter zero please enter valid year";  
}
}

function checkchar()
{
    var charValue=document.getElementById("char").value
    if (charValue>="a" &&charValue<="z"||charValue>="A"&&charValue<="Z")
    {
document.getElementById("charresult").innerHTML=charValue+" is an alphabet"
    }
    else if(charValue=="")
    {
        document.getElementById("charresult").innerHTML="here enter any character"
    }
    else
    {
        document.getElementById("charresult").innerHTML=charValue+" is not an alphabet" 
    }
}

function vowelcheck()
{
    var check =document.getElementById("vowel").value
    if (check=="a"||check=="e"||check=="i"||check=="o"||check=="u")
    {
        document.getElementById("vowelresult").innerHTML=check+" is vowel "
    }
    else if(check=="")
    {
        document.getElementById("vowelresult").innerHTML=" please enter character "
    }
    else
    {
        document.getElementById("vowelresult").innerHTML=check+" is a consonant "
    }
}

function hello()
{
    var specialValue=document.getElementById("specialchar").value
    // console.log(specialValue)
    if (specialValue>="a" &&specialValue<="z"||specialValue>="A"&&specialValue<="Z")
    {
        document.getElementById("specialresult").innerHTML=" is an alphabet "
    }
    else if(specialValue>="0" &&specialValue<="9")
    {
        document.getElementById("specialresult").innerHTML=specialValue+" is a digit "
    }
    else if(specialValue=="")
    {
        document.getElementById("specialresult").innerHTML=specialValue+" please enter a charcter "
    }
    else{
        document.getElementById("specialresult").innerHTML=specialValue+" is a special character "
    }
}
function string()
{
var strlen=document.getElementById("str").value
document.getElementById("strresult").innerHTML="string length is "+strlen.length
}
function copystr()
{
    var copystr=document.getElementById("copystr").value
    document.getElementById("copyresult").innerHTML="String is copid as "+copystr+copystr
}
function concatenate()
{
    var str1=document.getElementById("str1").value
    var str2=document.getElementById("str2").value
    document.getElementById("conresult").innerHTML="string concatenate is `"+str1+str2+"`"
}
function string()
{
    var string1=document.getElementById("str11").value
    console.log(string1);
    var string2=document.getElementById("str22").value
    console.log(string2);
    var compare=string2.localeCompare(string1);
    console.log(compare);
    if (compare==0) {
        document.getElementById("result").innerHTML="Both strings are same ";
    }
    if (compare==-1||compare==1) {
     document.getElementById("result").innerHTML="Both strings are not same ";
     
 }
}
function lowercase()
{
    var lowstr=document.getElementById("lower").value
    lowstr=lowstr.toLowerCase();
    document.getElementById("lowerresult").innerHTML="string in lower case `"+lowstr+"`"
}
function uppercase()
{
    var lowstr=document.getElementById("upper").value
    lowstr=lowstr.toUpperCase();
    document.getElementById("upperresult").innerHTML="string in upper case `"+lowstr+"`"
}
function togglecase1()
{
    var lowstr1=document.getElementById("toggle").value
  
}