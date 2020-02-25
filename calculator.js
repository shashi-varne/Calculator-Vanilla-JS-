var exp = "",
    answer = 0;


// NUMBERS
document.getElementById('one').addEventListener('click', function() {
    exp += "1";
    document.getElementById('answer').innerHTML = exp;
});
document.getElementById('two').addEventListener('click', function() {
    exp += "2";
    document.getElementById('answer').innerHTML = exp;

});
document.getElementById('three').addEventListener('click', function() {
    exp += "3";
    document.getElementById('answer').innerHTML = exp;

});
document.getElementById('four').addEventListener('click', function() {
    exp += "4";
    document.getElementById('answer').innerHTML = exp;

});
document.getElementById('five').addEventListener('click', function() {
    exp += "5";
    document.getElementById('answer').innerHTML = exp;

});
document.getElementById('six').addEventListener('click', function() {
    exp += "6";
    document.getElementById('answer').innerHTML = exp;

});
document.getElementById('seven').addEventListener('click', function() {
    exp += "7";
    document.getElementById('answer').innerHTML = exp;

});
document.getElementById('eight').addEventListener('click', function() {
    exp += "8";
    document.getElementById('answer').innerHTML = exp;

});
document.getElementById('nine').addEventListener('click', function() {
    exp += "9";
    document.getElementById('answer').innerHTML = exp;

});
document.getElementById('zero').addEventListener('click', function() {
    exp += "0";
    document.getElementById('answer').innerHTML = exp;

});

// OPERATORS

document.getElementById('add').addEventListener('click', function() {
    exp += "+";
    document.getElementById('answer').innerHTML = exp;

});
document.getElementById('sub').addEventListener('click', function() {
    exp += "-";
    document.getElementById('answer').innerHTML = exp;

});
document.getElementById('mul').addEventListener('click', function() {
    exp += "*";
    document.getElementById('answer').innerHTML = exp;

});
document.getElementById('div').addEventListener('click', function() {
    exp += "/";
    document.getElementById('answer').innerHTML = exp;

});
document.getElementById('mod').addEventListener('click', function() {
    exp += "%";
    document.getElementById('answer').innerHTML = exp;

});
document.getElementById('cc').addEventListener('click', function() {
    exp = exp.substring(0, exp.length - 1);
    document.getElementById('answer').innerHTML = exp;
});

document.getElementById('equal').addEventListener('click', function() {
    try {
        answer = eval(exp);
        document.getElementById('answer').innerHTML = answer;
    } catch (e) {
        if (e instanceof Error) {
            //alert(e.message);
            document.getElementById('answer').innerHTML = "Invalid expression. Clear screen and try again.";

            exp = "";
        } else {
            throw (e);
        }
    }


});
document.getElementById('period').addEventListener('click', function() {
    exp += ".";
    document.getElementById('answer').innerHTML = exp;
});

//CLEAR
document.getElementById('clear').addEventListener('click', function() {
    answer = 0;
    exp = "";
    document.getElementById('answer').innerHTML = " ";

});



//Keyboard
document.addEventListener('keypress', function(event) {

    //console.log("Pressed key is", event.keyCode);
    if ((event.key >= 0 && event.key <= 9) || event.key === '.' || event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/' || event.key === '%' || event.key === 16) {
        exp += event.key;
        document.getElementById('answer').innerHTML = exp;

    } else if (event.key === '=' || event.keyCode === 13) {
        try {
            answer = eval(exp);
            document.getElementById('answer').innerHTML = answer;
            console.log("is it ass or titties");
        } catch (e) {
            if (e instanceof Error) {
                //alert(e.message);
                document.getElementById('answer').innerHTML = "Invalid expression. Clear screen and try again.";

                exp = "";
            } else {
                throw (e);
            }
        }
    } else {
        document.getElementById('answer').innerHTML = "Invalid expression. Clear screen and try again.";
        exp = "";
    }
    console.log(exp);
});

//Backspace case
// document.addEventListener('keydown', function(event) {
//     if (event.keyCode === 8) {
//         exp = exp.substring(0, exp.length - 1);
//         document.getElementById('answer').innerHTML = exp;
//     } else if (event.keyCode === 13) {
//         try {
//             answer = eval(exp);
//             console.log("nigga ass", exp);
//             document.getElementById('answer').innerHTML = answer;
//         } catch (e) {
//             if (e instanceof Error) {
//                 //alert(e.message);
//                 document.getElementById('answer').innerHTML = "Invalid expression. Clear screen and try again.";

//                 exp = "";
//             } else {
//                 throw (e);
//             }
//         }
//     }
// })