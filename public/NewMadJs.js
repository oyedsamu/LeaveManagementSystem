$("#submitbtn").click(function(){
    let username= $(#username).val();
    let password= $(#password).val();
    let users = []
    for(let i=0, i<users.length, i++){
        if(users[i].indexOf(username)!== -1){
            if(users[i].indexOf(username) == users[i].indexOf(password)){
                location.replace("/staffpage.html");
            }
        } else {
            alert(username + " not found!");
        }
    }
)

$("#viewdetails").click(function(){
    //get info from ajax page directly and post everything.
});

$(#delete).click(function(){

});

$(#delete).click(function(){

});