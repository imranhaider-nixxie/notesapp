import { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import toastify CSS

const App = () => {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(null); // To store the note being edited

  const fetchNotes = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/notes');
      const data = await res.json();
      setNotes(data);
    } catch (error) {
      toast.error('Error fetching notes'); // Display error toast on failure
      console.error('Error fetching notes:', error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const addNote = async (note) => {
    try {
      const res = await fetch('http://localhost:5000/api/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(note),
      });
      const data = await res.json();
      setNotes([...notes, data]);
      toast.success('Note added successfully!'); // Success notification on note addition
    } catch (error) {
      toast.error('Error adding note'); // Display error toast on failure
      console.error('Error adding note:', error);
    }
  };

  const deleteNote = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/notes/${id}`, {
        method: 'DELETE',
      });
      setNotes(notes.filter((note) => note._id !== id));
      toast.success('Note deleted successfully!'); // Success notification on deletion
    } catch (error) {
      toast.error('Error deleting note'); // Display error toast on failure
      console.error('Error deleting note:', error);
    }
  };

  const editNote = async (id, updatedNote) => {
    try {
      const res = await fetch(`http://localhost:5000/api/notes/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedNote),
      });

      if (res.ok) {
        const updatedNotes = notes.map((note) =>
          note._id === id ? { ...note, ...updatedNote } : note
        );
        setNotes(updatedNotes);
        toast.success('Note updated successfully!'); // Success notification on update
      } else {
        toast.error('Failed to update note');
      }
    } catch (error) {
      toast.error('Error updating note'); // Display error toast on failure
      console.error('Error updating note:', error);
    }
  };

  // Pass the note to be edited into the form
  const handleEditClick = (note) => {
    setCurrentNote(note);
  };

  return (
    <Container>
      {/* ToastContainer for displaying notifications */}
      <ToastContainer />
      
      <Typography variant="h4" gutterBottom>
        Notes App
      </Typography>
      {/* Pass currentNote to the form for editing */}
      <NoteForm addNote={addNote} editNote={editNote} currentNote={currentNote} setCurrentNote={setCurrentNote} />
      <NoteList notes={notes} deleteNote={deleteNote} handleEditClick={handleEditClick} />
    </Container>
  );
};

export default App;
