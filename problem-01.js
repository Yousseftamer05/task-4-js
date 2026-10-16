const library = {
  name: "frontend library",
  books: [],

addBook(title = "") {
  if (title.length < 2) {
    return "Invalid book title";
  } else {
    library.books.push(title);
  }
},
removeLastBook() {
  if (library.books.length <= 0) {
    return "library is empty";
  } else {
    library.books.pop();
  }
},
getLastBook() {
  if (library.books.length <= 0) {
    return "library is empty";
  } else {
    return library.books[library.books.length - 1];
  }
},
getSummary() {
  return `frontEnd library has ${library.books.length} books`;
},
}
library.addBook("JavaScript Basics");
library.addBook("Clean Code"); 
library.addBook("Clean Code"); 

console.log(library.getLastBook()); 
library.removeLastBook(); 
console.log(library.getSummary());    
