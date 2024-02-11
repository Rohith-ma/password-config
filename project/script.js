var psd1 = document.getElementById("password1")
var psd2 = document.getElementById("password2")
var resultpsd = document.getElementById("result")

function update(){
    if(psd1.value==="" || psd2.value==="")
    {resultpsd.textContent ="fill both fiels";
    resultpsd.style.color="red"}
    else if(psd1.value!==psd2.value){
        resultpsd.textContent ="password not matched";
    resultpsd.style.color="red"}
    else{
        resultpsd.textContent ="password matched!";
        resultpsd.style.color="green"}
}
function togglemode()
{
    if(psd1.type==="password" && psd2.type==="password")
    {
        psd1.type="text";
        psd2.type="text";
    }
    else
    {
        psd1.type="password";
        psd2.type="password";
    }
}
function submit(){
    var pops = document.getElementById("pop")
    pops.style.display="block";
    setTimeout
(function(){pops.style.display="none";},1000);}