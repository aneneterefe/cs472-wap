/** 
* @author Anene Terefe
* file books.js
* created April 11, 2020
*/ 
"user strict";

$( document ).ready(function() {
    //call home on load
    home(); 
    //-------------------Navigation Menue click Listener
    $("#home").click(()=>home());
    $("#books").click(()=>books());

    //========================Views=====================
    // -------------Home view
    function home(){
        $(".container-fluid").html(
            '<h3>Welcome to the eLibrary<sup>&reg;</sup></h3>'+
            '<hr/>'+
            '<div style="font-size: 1em">'+
                '<img src="images/books.jpeg"/><hr>'+
                '<p>We are a top-flight, fully-digitized library.'+
                    'Find out more <a href="#">about us</a> and'+
                    'and learn how we can serve you with a widest variety of books and lots of other'+
                    'digital content+ all for your education as well as your entertainment.'+
                    'You can also <a href="#">take a virtual tour</a>,'+
                    'of our world-class facilities and be amazed at all what we have in stock'+
                    'for you, your family and friends.</p>'+

                '<p>Lorem Ipsum is simply dummy text of the printing and typesetting'+
                    'industry. Lorem Ipsum has been the industry\'s standard dummy text'+
                    'ever since the 1500s, when an unknown printer took a galley of type'+
                    'and scrambled it to make a type specimen book. It has survived not'+
                    'only five centuries.</p>'+

                '<p>Already have access as a Member, Librarian or System Administrator? Then, simply <a href="#">Sign-In</a>'+
                    'to access the full range of services available to you, based on your role and access rights.</p>'+
            '</div>'+
        '</div>'
        );
    };
    //-------------Book List view
    function books(){
        $(".container-fluid").html(
            '<div class="table-wrapper" style="width: 100%;">'+
            '<div class="table-title">'+
                '<div class="row">'+
                    '<div id="successalert" style="display: none;">'+
                        '<div class="alert alert-success alert-dismissible fade show" role="alert">'+
                            '<strong>Success!</strong> New Record is saved.'+
                            '<button type="button" class="close" data-dismiss="alert" aria-label="Close">'+
                            '<span aria-hidden="true">&times;</span>'+
                            '</button>'+
                        '</div>'+
                    '</div>'+
                    '<div id="failalert" style="display: none;">'+
                        '<div class="alert alert-danger alert-dismissible fade show" role="alert">'+
                            '<strong>Error!</strong> Something went wrong. Please try again.'+
                            '<button type="button" class="close" data-dismiss="alert" aria-label="Close">'+
                            '<span aria-hidden="true">&times;</span>'+
                            '</button>'+
                        '</div>'+
                    '</div>'+
                    '<div class="col-sm-10">'+
                        '<h2><b>Books</b> in our collection</h2>'+
                    '</div>'+
                    '<div class="col-sm-2">'+
                        '<button type="button" class="btn btn-outline-success" data-toggle="modal" data-target="#addBooksModal">'+
                            'Add New Books'+
                        '</button>'+						
                    '</div>'+
                '</div>'+
            '</div>'+
            '<table class="table">'+
                '<thead class="thead-light">'+
                    '<tr>'+
                        '<th> #</th>'+
                        '<th>ISBN</th>'+
                        '<th>Book Title</th>'+
                        '<th>Overdue Fee</th>'+
                        '<th>Publisher</th>'+
                        '<th>Date Published</th>'+
                        '<th></th>'+
                        '<th></th>'+
                    '</tr>'+
                '</thead>'+
                '<tbody id="data">'+
                '</tbody>'+
            '</table>'+
            '<div class="loader"></div>'+
        '</div>'
        );
        //populate table
        bookList();
    };

    // Populates the book list table with data
    function bookList(data){
        $.get("https://elibraryrestapi.herokuapp.com/elibrary/api/book/list", function(data) {
                let count=1;
                $("#data").empty();
                data.forEach(d => {
                    $(".loader").hide();
                    $("#data").append("<tr>"+ 
                            "<th scope='row'>"+count+" </td>"+
                            "<td>"+d.isbn+" </td>"+
                            "<td>"+d.title+" </td>"+
                            "<td>"+d.overdueFee+" </td>"+
                            "<td>"+d.publisher+" </td>"+
                            "<td>"+d.datePublished+" </td>"+
                            "<td><button type='button' onclick='editModalFill()' class='btn btn-outline-warning' data-toggle='modal' data-target='#editBooksModal'>Edit</button></td>"+
                            "<td><button type='button' onclick='deleteModalFill()' class='btn btn-outline-danger' data-toggle='modal' data-target='#deleteBooksModal'>Delete</button></td>"+
                            "</tr>"
                        );
                    count++;
                });

            }).fail(function() {
                $("#data").append("<tr colspan='8'>Unable To fetch data</tr>");
            });
    };

    //--------------Add New Book
    //add Book
    $("#addForm").submit(function(event){
        event.preventDefault();
        let datad={ 
            "isbn": $("#isbn").val(),
            "title": $("#title").val(),
            "overdueFee":$("#overdueFee").val(),
            "publisher":$("#publisher").val(),
            "datePublished":$('#datePublished').val() 
            }

        $.ajax({
                type: "POST",
                url: 'https://elibraryrestapi.herokuapp.com/elibrary/api/book/add',
                dataType: 'json',
                async: false,
                contentType: 'application/json',
                data: JSON.stringify(datad),
                success: function () {
                    //bookList() refreshes book list to see the new entry    
                    $("#successalert").show();
                    $("#failalert").hide(); 
                    //clear data
                    $("#isbn").val("");
                    $("#title").val("");
                    $("#overdueFee").val("");
                    $("#publisher").val("");
                    $('#datePublished').val(""); 
                    bookList(); 
                }
            }). fail(function () {
                $("#successalert").hide();
                $("#failalert").show(); 
            });      
        $('#addBooksModal').modal('hide');// modal is embeded inside    
    });


    //--------------Edit Book
    
    $("#editForm").submit(function(event){
        //put method ajax here
        event.preventDefault();
        $('#editBooksModal').modal('hide');// modal is embeded inside
    });

    //delete Book
    $("#deleteForm").submit(function(event){
        //delet method ajax here
        event.preventDefault();
        $('#editBooksModal').modal('hide');// modal is embeded inside
    });

});

//edit Book Modal Fill 
function editModalFill(bookId,isbn,title,overdueFee,publisher,datePublished){
    alert("api url is not provided yet. Not working");
    $("#ebookid").val(bookId);
    $("#eisbn").val(isbn);
    $("#etitle").val(title);
    $("#eoverdueFee").val(overdueFee);
    $("#epublisher").val(publisher);
    $('#edatePublished').val(datePublished);
}

//delete Book Modal Fill 
function deleteModalFill(bookId,isbn,title){
    alert("api url is not provided yet. Not working");
    $("#dbookId").val(bookId);
    $("#disbn").val(isbn);
    $("#dtitle").val(title);
}
     

