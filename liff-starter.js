window.onload = function (e) {
    liff.init(function (data) {
        initializeApp(data);

    });
};

function initializeApp(data) {
    document.getElementById('sendmessagebutton').addEventListener('click', function () {
        var msg = document.getElementById('bchcode').value;
       var request = new XMLHttpRequest()

        request.open('POST', 'https://damp-bayou-88423.herokuapp.com/liff', true)
        request.onload = function() {
          // Begin accessing JSON data here
          var data = JSON.parse(this.response)

          if (request.status >= 200 && request.status < 400) {
            data.forEach(movie => {
              console.log(movie.title)
            })
          } else {
            console.log('error')
          }
        }

        request.send()

        
        
        
        liff.sendMessages([{
            type: 'text',
            text: request
        }
          ]).then(function () {
            liff.closeWindow();
        }).catch(function (error) {
            window.alert("Error sending message: " + error);
        });
    });
}

