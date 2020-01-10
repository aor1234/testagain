// window.onload = function(e) {
//     liff.init(function(data) {
//         initializeApp(data);
//     });
// };

// function initializeApp(data) {
//     document.getElementById('sendmessagebutton').addEventListener('click', function() {
//         var msg = document.getElementById('bchcode').value;
//         var xhttp = new XMLHttpRequest();
        
//         var x ;
//         xhttp.onreadystatechange = function() {
//             if (this.readyState == 4 && this.status == 200) {
//                 var x = this.responseText;
// //                 var jsonResponse = JSON.parse(x);
// //                 console.log(jsonResponse["x"]);
            
//             }
//         };
//         xhttp.open("POST", "https://damp-bayou-88423.herokuapp.com/liff", true);
        
//         xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//         xhttp.send(null);




//         liff.sendMessages([{
//             type: 'text',
//             text: x
//         }]).then(function() {
//             liff.closeWindow();
//         }).catch(function(error) {
//             window.alert("Error sending message: " + error);
//         });
//     });

    
// }



window.onload = function(e) {
    liff.init(function(data) {
        initializeApp(data);
    });
};

function initializeApp(data) {
    document.getElementById('sendmessagebutton').addEventListener('click', function() {
        var msg = document.getElementById('bchcode').value;
        var xhttp = new XMLHttpRequest();
        var res;
        xhttp.onreadystatechange = function(res) {
            if (this.readyState == 4 && this.status == 200) {
                x = this.responseText(res);
            }
        };
        xhttp.open("POST", "https://damp-bayou-88423.herokuapp.com/liff", true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send();




        liff.sendMessages([{
            type: 'text',
            text: res
        }]).then(function() {
            liff.closeWindow();
        }).catch(function(error) {
            window.alert("Error sending message: " + error);
        });
    });


}
