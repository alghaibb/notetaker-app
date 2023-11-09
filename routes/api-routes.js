const express = require('express');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid'); // For generating unique IDs
const router = express.Router();

// Define the path to the JSON file that will store the notes.
// We use `path.join` to ensure the path is correct regardless of the operating system.
const dbPath = path.join(__dirname, '..', 'db', 'db.json');

/**
 * Helper function to read the notes from the JSON file.
 * It tries to read the file and parse the JSON.
 * If there is an error (like the file doesn't exist), it returns an empty array.
 */
const readNotes = () => {
  try {
    const data = fs.readFileSync(dbPath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
};

/**
 * Helper function to save notes to the JSON file.
 * It receives an array of notes and writes them to the file,
 * converting them to a JSON string. It uses pretty formatting with 2-space indentation.
 */
const saveNotes = (notes) => {
  fs.writeFileSync(dbPath, JSON.stringify(notes, null, 2));
};

/**
 * API route to read and return all notes.
 * When a GET request is made to '/api/notes', this route handler is called.
 * It reads the notes using the readNotes helper and sends them back in the response.
 */
router.get('/api/notes', (req, res) => {
  const notes = readNotes();
  res.json(notes);
});

/**
 * API route to add a new note.
 * When a POST request is made to '/api/notes' with a JSON payload containing 'title' and 'text',
 * this route handler creates a new note object, adds it to the array of notes, and saves the array.
 * If the required fields are missing, it sends a 400 error response.
 */
router.post('/api/notes', (req, res) => {
  const { title, text } = req.body;
  if (title && text) {
    const newNote = { title, text, id: uuidv4() };
    const notes = readNotes();
    notes.push(newNote);
    saveNotes(notes);
    res.json(newNote);
  } else {
    res.status(400).send('Note must have a title and text');
  }
});

/**
 * API route to delete a note.
 * When a DELETE request is made to '/api/notes/:id', this route handler removes the note
 * with the specified ID from the array and saves the updated array to the file.
 * It responds with a confirmation message.
 */
router.delete('/api/notes/:id', (req, res) => {
  const { id } = req.params;
  let notes = readNotes();
  notes = notes.filter(note => note.id !== id);
  saveNotes(notes);
  res.json({ message: `Note with id ${id} deleted` });
});

// Export the router to be used in other parts of the application, like the main server file.
module.exports = router;
