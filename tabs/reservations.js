$("#picker").datetimepicker({
    timepicker: false,
    datepicker: true,
    format:'d-m-y',
    weeks: true
})
$("#tpicker").datetimepicker({
    timepicker: true,
    datepicker: false,
    format:'H:i',
    allowTimes: ['08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30'
    , '21:00', '21:30'
    ]
})

var form = document.getElementById("form");

form.addEventListener("submit", function(event){
    event.preventDefault();

    var email = document.getElementById("email").value;
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!email.match(validRegex)){
        alert("Enter a valid Email Id");
        return;
    }

    var contact = document.getElementById("contact").value;
    var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if (!contact.match(re)){
        alert("Enter a valid Contact No");
        return;
    }

    var date = document.getElementById("picker").value;
    var d = Number(date[0]+date[1])
    var m = Number(date[3]+date[4])
    var y = Number(date[6]+date[7])

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    D = Number(dd);
    M = Number(mm);
    Y = Number(yyyy);

    if(y<=Y){
        if(m<=M){
            if(d<=D){
                alert("You can only make reservations for the upcoming days");
                return;
            }
        }
    }

    document.getElementById("result").innerHTML= "You have succesfully made your reservation. "+
    "You will receive an E mail and a text message shortly";
    
    form.reset()
})