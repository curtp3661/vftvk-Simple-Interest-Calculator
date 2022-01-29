function compute() //assigning values to variables to allow calcutor arythmitic to function on compute
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);

    document.getElementById("result").innerHTML="If you deposit <mark>"+principal+"</mark>,\<br\>at an interest rate of <mark>"+rate+"%</mark>\<br\>You will receive an amount of <mark>"+interest+",</mark>\<br\>in the year <mark>"+year+"</mark>\<br\>"


}
//following code allows us to see the interest rate when you move the slider
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;

}

function validatePrincipal()
{
    var principal = document.getElementById("principal").value;
//if statement to force an error dialog box if user enters value of null or 0
    if(principal <= "0")

        alert("Please enter a Positive Number")
        document.getElementById("principal").focus();
    
}
