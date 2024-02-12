function calculate() {
    let a = document.getElementById("a").value;

    let b = 1;
    // checking if number is negative
    if (a < 0) {
        document.getElementById("factorial").innerHTML = "Factorial for negative number does not exist. ";
    }

    // if number is 0
    else if (a === 0) {
        document.getElementById("factorial").innerHTML = "The factorial of ${a} is 1.";
    }

    //if number is positive
    else {
        for (i = 1; i <= a; i++) {
            b = b * i;
        }

        document.getElementById("factorial").innerHTML = "The factorial of " + a + " is :  " + b;
    }
}

// function calculate() {
//     let a = document.getElementById("a").value;
//     let b = a;

//    //  checking if number is negative
//     if (a < 0) {
//         document.getElementById("factorial").innerHTML = "Factorial for negative number does not exist. ";
//     }

//     // if number is 0
//     else if (a === 0) {
//         document.getElementById("factorial").innerHTML = "The factorial of ${a} is 1.";
//     }

//     // if number is positive
//     else {
//         for (i = a - 1; i > 0; i--) {
//             b = b * i;
//         }

//         document.getElementById("factorial").innerHTML = "The factorial of " + a + " is :  " + b;
//     }
// }