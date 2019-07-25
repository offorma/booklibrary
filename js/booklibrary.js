


    let myLibrary = [];

    function Book() {
    }
    Book.prototype.read = false;

    function addBookToLibrary(book) {
        myLibrary.push(book);
        getElement("input[id='author']").value = "";
        getElement("input[id='title']").value = "";
        getElement("input[id='NumberofPages']").value = "";
     
        $('#myModal').modal('hide');
        render();
        alert('book added');
    }
    function getFromHtml(){
        //get all the fields
        let author = getElement("input[id='author']").value;
        let title = getElement("input[id='title']").value;
        let numberOfPages = getElement("input[id='NumberofPages']").value;
        createBook(author,title,numberOfPages);
    }
    function createBook(author,title,numberOfPages){
        // make sure they are not empty
        if( author != "" && title != "" && numberOfPages!= ""){
             let newBook = new Book();
             newBook.author = author;
             newBook.title = title;
             newBook.numberOfPages = numberOfPages;
             addBookToLibrary(newBook);
        }else {
             alert("fields cannot be empty");
        }
    }
    function render(){
        let layout = getElement(".book-area");
        let card = "";
        for (let i = 0; i<myLibrary.length; i++) {
            card +=
                "<span class='card col-lg-3 pull-left my-card'>"+
                    "<div class='card-body'>"+
                        "<h5 class='card-title'>Author: "+myLibrary[i].author+"</h5>"+
                        "<img class='book-img' src='image/defbookcover-min.jpg'>"+
                        "<p class='card-text'>Title: "+myLibrary[i].title+"</p>"+
                        "<p> Number of Pages <span class='badge badge-light'>"+myLibrary[i].numberOfPages+"</span></p>"+
                        "<button type='button' class='btn btn-danger' onclick='deleteBook("+i+")'>Delete Book</button>"+
                        "<button type='button' class='btn btn-success read card-btn' onclick='markAsRead("+i+")'>Mark as Read</button>"+
                    "</div>"+
                "</span>";
        }
        layout.innerHTML = card;
    }  
    function markAsRead(i){
        if (myLibrary[i].read ==false){
            myLibrary[i].read = true;
            getElement(".read").innerHTML = "Mark as Unread";
        }else{
            myLibrary[i].read = false;
            getElement(".read").innerHTML = "Mark as Read";
        }
    }
    function deleteBook(i){
        myLibrary.splice(i,1);
        render();
    }
    function getElement(id){
        return document.querySelector(id);
    }
   