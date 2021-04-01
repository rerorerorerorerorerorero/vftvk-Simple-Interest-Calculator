function selectFunction(){     
    for(x=1;x<200;x++){
    var option = "<option value='" + x + "'>" + x + "</option>"
    document.getElementById('years').innerHTML += option;   
    }
} 

function interestRateValue(){
    var rate= document.getElementById('points').value;
    document.getElementById('rate').innerHTML = rate+"%";
}

function getInterestRate(){
    return document.getElementById('points').value;
}

function compute(){
    var amount = document.getElementById("principal").value;
    if(amount>0){
        var rate = this.getInterestRate();
        var years = document.getElementById("years").value;
        var interestAmount=amount*(rate/100)*years;

        document.getElementById("para").innerHTML = "If you deposit " +amount +" at an interest rate of "+rate+". You will receive an amount of "+interestAmount+" in the year "+targetYear()+" "
        document.getElementById("principal").focus();        
        return interestAmount;
    }
    else{
        window.alert("Enter a positive amount")
        document.getElementById("principal").focus();
    }
}


function targetYear(){
    var d= new Date();
    var targetYear = parseInt(d.getFullYear()) + parseInt(document.getElementById("years").value);
    return targetYear;
}
