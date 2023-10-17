const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

const numberOfBooksRead = () => {
  // write your code here
	function numberOfBooksRead(library) {
  // Check if the library object has a property called 'books' and if it's an array
  if (library.hasOwnProperty('books') && Array.isArray(library.books)) {
    // Use the filter method to create a new array containing only read books
    const readBooks = library.books.filter(book => book.readingStatus === true);
    
    // Return the length of the 'readBooks' array, which represents the number of read books
    return readBooks.length;
  } else {
    // If 'books' is not found or not an array, return an error message or handle the situation accordingly
    return "Invalid library object";
  }
}

// Example usage:

  

const numReadBooks = numberOfBooksRead(library);
console.log("Number of read books: " + numReadBooks);

	
};

// Do not change the code below

alert(numberOfBooksRead());
