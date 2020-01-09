window.onload = function (e) {
    liff.init(function (data) {
        initializeApp(data);
    });
};

function initializeApp(data) {
    document.getElementById('sendmessagebutton').addEventListener('click', function () {
        var msg = document.getElementById('bchcode').value;
        
        const userAction = async () => {
        const response = await fetch('https://damp-bayou-88423.herokuapp.com/liff', {
        method: 'POST',
            body: myBody, // string or object
            headers: {
              'Content-Type': 'application/json'
            }
          });
          const myJson = await response.json(); //extract JSON from the http response
          // do something with myJson
        }
        
      
        
        
        
        
        liff.sendMessages([{
            type: 'text',
            text: myBody
        }
          ]).then(function () {
            liff.closeWindow();
        }).catch(function (error) {
            window.alert("Error sending message: " + error);
        });
    });
}
