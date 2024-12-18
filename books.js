// Create a Book
app.post('/books', (req, res) => {
    const { title, author, genre, published_year } = req.body;
    const sql = 'INSERT INTO Books (title, author, genre, published_year) VALUES (?, ?, ?, ?)';
    db.query(sql, [title, author, genre, published_year], (err, result) => {
        if (err) throw err;
        res.send('Book added successfully');
    });
});

// Get All Books
app.get('/books', (req, res) => {
    const sql = 'SELECT * FROM Books';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Update a Book
app.put('/books/:id', (req, res) => {
    const { id } = req.params;
    const { title, author, genre, published_year } = req.body;
    const sql = 'UPDATE Books SET title = ?, author = ?, genre = ?, published_year = ? WHERE id = ?';
    db.query(sql, [title, author, genre, published_year, id], (err, result) => {
        if (err) throw err;
        res.send('Book updated successfully');
    });
});

// Delete a Book
app.delete('/books/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM Books WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) throw err;
        res.send('Book deleted successfully');
    });
});
