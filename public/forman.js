alert("Welcome to the Manager's Dashboard!");

// $(function(){
//     $("#viewDetails").click(function(){
//         $.getJSON("/db.json", function(employees){
//             $("#details").html('<ul>');
//             $("#details").append('<li>' + employees[1].username + "</li>");
//             $("#details").append('<li>' + employees[2].username + "</li >");
//             $("#details").append('<li>' + employees[3].username + "</li >");
//             $("#details").append('<li>' + employees[4].username + "</li ></ul>");
//         });
//     });
// });

$.ajax({
    console.log("hi")
    url: 'http://localhost:3000/employees',
    method: 'get',
}).done((e) => {
    console.log(e)
    for (let i = 0; i < e.length; i++) {
        $('#tbody').append(
            `<tr>
                <td>${i + 1}
                </td>
                    <td>
                       ${e[i].firstName + " " + e[i].lastName} 
                       </td>
                    <td>
                    ${e[i].remLeaveDays.annualLeave} 
                    </td>
                    <td>
                    ${e[i].remLeaveDays.casualLeave}
                    </td>
                    <td>
                        ${e[i].remLeaveDays.casualLeave}
                        </td>
                        <td>
                        <button id="del-${e[i].id}" class="delete-btn">Delete</button>
                        <button id="edt-${e[i].id}" class="edit-btn">Edit</button>
                    </td>
                    </tr>`
        )

    }


    //functionality on delete button
    $('.delete-btn').on('click', (e) => {
        let id = e.target.id.split('del-').join('')
        alert(id)
        $.ajax({
            url: `http://localhost:3000/cars/${id}`,
            method: 'delete'
        }).done((e) => {

        })
    })

    $('.edit-btn').click(e => {

    })

})

$('#form').submit((e) => {
    e.preventDefault()
    let name = $('#name').val();
    let age = Number($('#age').val());
    let rating = parseInt($('#rating').val());
    let address = $('#address').val()
    ///alert(`${name}, ${age}, ${rating}, ${address}`)
    $.ajax({
        url: 'http://localhost:3000/cars',
        method: 'post',
        data: {
            name, age: Number(age), rating: Number(rating), address
        }
    }).done((e) => {
        $('#tbody').append(
            `<tr>
            <td>
                   ${e.name} 
                </td>
                <td>
                ${e.age} 
                </td>
                <td>
                    ${e.address}
                    </td>
                    <td>
                    ${e.rating}
                    </td>
                    <td>
                    <button type="button" class="btn btn-danger delete-btn">Delete</button>
                    </td>
                    </tr>`
        )

        $('#name').val('');
        $('#age').val('');
        $('#rating').val('');
        $('#address').val('')

    })
})
