import { useState, useEffect } from 'react';
import { Button, TextField, Box } from '@mui/material';

const NoteForm = ({ addNote, editNote, currentNote, setCurrentNote }) => {
  const [note, setNote] = useState({ title: '', content: '' });

  useEffect(() => {
    if (currentNote) {
      setNote({ title: currentNote.title, content: currentNote.content });
    }
  }, [currentNote]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentNote) {
      // Update existing note
      editNote(currentNote._id, note);
      setCurrentNote(null); // Clear current note after editing
    } else {
      // Add new note
      addNote(note);
    }
    setNote({ title: '', content: '' });
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        label="Title"
        value={note.title}
        onChange={(e) => setNote({ ...note, title: e.target.value })}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Content"
        value={note.content}
        onChange={(e) => setNote({ ...note, content: e.target.value })}
        fullWidth
        margin="normal"
        multiline
        rows={4}
      />
      <Button type="submit" variant="contained" color="primary">
        {currentNote ? 'Update Note' : 'Add Note'}
      </Button>
    </Box>
  );
};

export default NoteForm;
