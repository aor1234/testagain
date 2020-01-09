window.onload = function(e) {
    liff.init(function(data) {
        initializeApp(data);
    });
};

function initializeApp(data) {
    document.getElementById('sendmessagebutton').addEventListener('click', function() {
        var msg = document.getElementById('bchcode').value;
        var http = new XMLHttpRequest();
        var url = "https://damp-bayou-88423.herokuapp.com/liff";
        var params;

        http.open("POST", "https://damp-bayou-88423.herokuapp.com/liff", true);


        http.onreadystatechange = function() {
            if (http.readyState == 4 && http.status == 200) {
                params = http.responseText;
            }
        }
        http.send(params);



        liff.sendMessages([{
            type: 'text',
            text: params
        }]).then(function() {
            liff.closeWindow();
        }).catch(function(error) {
            window.alert("Error sending message: " + error);
        });
    });
}
