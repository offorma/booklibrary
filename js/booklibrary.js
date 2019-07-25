
//   $(document).ready(function() {
//     $("#myModal").modal();
//   });

    let myLibrary = [];

    function Book() {
        this.read = false;
    }

    function addBookToLibrary(book) {
        myLibrary.concat(book);
  
        alert('book added');
        $('#myModal').modal('hide')
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
        
    }  
    function markAsRead(){

    }
    function deleteBook(){

    }
    function getElement(id){
        return document.querySelector(id);
    }
   