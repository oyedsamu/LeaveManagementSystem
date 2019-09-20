alert("Welcome to the Leave Management System");
    $(document).ready(function () {
        $.getJSON("http://localhost:3000/users/", function (data) {
            var employeeData = '';
            $.each(data, function (key, value) {
                employeeData += '<tr>';
                employeeData += '<td>' + `${value.id}` + "</td>";
                employeeData += "<td>" + value.name + "</td>";
                employeeData += "<td>" + value.dept + "</td>";
                employeeData += "<td>" + value.appLeave + "</td>";
                employeeData += "<td>" + value.remLeave + "</td>";
                employeeData += "</tr>"
            });
            $('#employeeTable').append(employeeData);
        });
    });

// var users = [
//     {
//         username: "damolaademola@amazemedia.com",
//         password: "babaLoleshe666"
//     },
//     {
//         username: "paulokoye@amazemedia.com",
//         password: "uniquePassword1"
//     },
//     {
//         username: "paulokoye@amazemedia.com",
//         password: "uniquePassword1"
//     }
// ];

// function loginverify(){
//     let username= document.getElementById("username").value;
//     let password= document.getElementById("password").value;
//     let dept= document.getElementById("dept").value

//     for (let i=0; i<users.length, i++){
//         if (dept=="HR" && username==users[2].username && password==users[2].password) {
//             location.replace("/public/HR.html");
//         } else if(dept==){

//         }
//     }
// }

// $(function(){
//     $.getJSON("db.json", function(data){
//         var employeeData = '';
//         $.each(data, function(key, value){
//             employeeData += "<tr>";
//             employeeData += "<td>" + value.id + "</td>";
//             employeeData += "<td>" + value.name + "</td>";
//             employeeData += "<td>" + value.dept + "</td>";
//             employeeData += "<td>" + value.appLeave + "</td>";
//             employeeData += "<td>" + value.remLeave + "</td>";
//             employeeData += </tr>
//         });
//     });
// });

