


// function Convert(){
  
//     var a = document.getElementById("head");
//     var message = document.getElementById('message');
    
// Main(message);  
// function Main(input){
// for(var x = 0;x<message.length;x++){
//     if(x%2 === 0){
//         input.value = input.value.substring(0, x) + input.value.charAt(x).toUpperCase() + input.value.substring(x + 1);
//         console.log(message[x]);
//     }
//     a.innerHTML = message.value;
// }
// }
// }


function Convert() {
    var a = document.getElementById("head");
    var message = document.getElementById('message');

    Main(message);

    function Main(input) {
        for (var x = 0; x < input.value.length; x++) {
            if (x % 2 === 0) {
                // Convert the character to uppercase
                input.value = input.value.substring(0, x) + input.value.charAt(x).toUpperCase() + input.value.substring(x + 1);
                //   input.value =  input.value.charAt(x).toUpperCase() ;
            }
        }
        // Update the HTML content after modifying the message
        a.innerHTML = input.value;
    }
}
