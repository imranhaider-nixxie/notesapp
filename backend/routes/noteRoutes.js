const express = require('express');
const Note = require('../models/Note');
const router = express.Router();

// Get all notes
router.get('/', async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Create a new note
router.post('/', async (req, res) => {
  const { title, content } = req.body;
  try {
    const note = new Note({
      title,
      content,
    });
    await note.save();
    res.status(201).json(note);
  } catch (error) {
    res.status(400).json({ message: 'Error creating note' });
  }
});

// Update a note
router.put('/:id', async (req, res) => {
  const { title, content } = req.body;
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ message: 'Note not found' });

    note.title = title;
    note.content = content;
    await note.save();

    res.json(note);
  } catch (error) {
    res.status(400).json({ message: 'Error updating note' });
  }
});

 
router.put('/api/notes/:id', async (req, res) => {
  try {
      const { title, content } = req.body;
      const updatedNote = await Note.findByIdAndUpdate(
          req.params.id,
          { title, content },
          { new: true } // Return the updated note
      );

      if (!updatedNote) {
          return res.status(404).json({ message: 'Note not found' });
      }

      res.status(200).json(updatedNote);
  } catch (error) {
      console.error('Error updating note:', error);
      res.status(500).json({ message: 'Server error' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
      console.log('Attempting to delete note with ID:', req.params.id);
      const note = await Note.findByIdAndDelete(req.params.id);
      
      if (!note) {
          console.log('Note not found');
          return res.status(404).json({ message: 'Note not found' });
      }

      console.log('Note deleted successfully');
      res.status(200).json({ message: 'Note deleted successfully' });
  } catch (error) {
      console.error('Error deleting note:', error);
      res.status(500).json({ message: 'Server error' });
  }
});


module.exports = router;
