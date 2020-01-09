window.onload = function (e) {
    liff.init(function (data) {
        initializeApp(data);
    });
};

function initializeApp(data) {
    document.getElementById('sendmessagebutton').addEventListener('click', function () {
        var msg = document.getElementById('bchcode').value;
        
       var request = new XMLHttpRequest()

    // Open a new connection, using the GET request on the URL endpoint
        request.open('POST', 'https://damp-bayou-88423.herokuapp.com/liff', true)
        request.onload = function() {
         // Begin accessing JSON data here
        }
        // Send request
        request.send()
        
      
        
        
        
        
        liff.sendMessages([{
            type: 'text',
            text: XMLHttpRequest
        }
          ]).then(function () {
            liff.closeWindow();
        }).catch(function (error) {
            window.alert("Error sending message: " + error);
        });
    });
}
