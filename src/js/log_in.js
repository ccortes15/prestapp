function submit_by_id() {
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;
    
    if(user && pass){
        location.href = './index.html'
    }
}
