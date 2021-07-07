// MODEL. In fact, large parts of the view and controller code 
//could be automatically generated from the model code

function Book(slots) {
	this.isbn = slots.isbn;
	this.title = slots.title;
	this.year = slots.year;
}

Book.instances = {};

Book.add = function (slots) {
	const book = new Book(slots);
	// add book to the collection of Book.instances 
	Book.instances[slots.isbn] = book;
	console.log(`Book ${slots.isbn} created!`);
};

//   booksString = localStorage["books"];
//   books = JSON.parse(booksString);

Book.convertRec2Obj = function (bookRow) {
	const book = new Book(bookRow);
	return book;
};

// key: { isbn:"006251587X", title:"Weaving the Web", year:2000 }

Book.retrieveAll = function () {
	var booksString = "";
	try {
		if (localStorage["books"]) {
			booksString = localStorage["books"];
		}
	} catch (e) {
		alert("Error when reading from Local Storage\n" + e);
	}
	if (booksString) {
		const books = JSON.parse(booksString);
		const keys = Object.keys(books);
		console.log(`${keys.length} books loaded.`);
		for (const key of keys) {
			Book.instances[key] = Book.convertRec2Obj(books[key]);
		}
	}
};

Book.update = function (slots) {
	const book = Book.instances[slots.isbn],
		year = parseInt(slots.year);

	if (book.title !== slots.title) book.title = slots.title;
	if (book.year !== year) books.year = year;
	console.log(`Book ${slots.isbn} has been updated!`);
}


Book.destroy = function (isbn) {
	if (Book.instances[isbn]) {
		console.log(`Book ${isbn} deleted`);
		delete Book.instances[isbn];
	} else {
		console.log(`There is no book with ISBN ${isbn} in the database!`);
	}
};





