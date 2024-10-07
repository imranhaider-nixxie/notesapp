import { Button, Typography, Box, Card, CardContent, CardActions } from '@mui/material';

const NoteList = ({ notes, deleteNote, handleEditClick }) => {
  return (
    <Box mt={2}>
      {notes.map((note) => (
        <Card key={note._id} sx={{ mb: 2, boxShadow: 2 }}>
          <CardContent>
            <Typography variant="h6" component="div">
              {note.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {note.content}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" variant="contained" color="primary" onClick={() => handleEditClick(note)}>
              Edit
            </Button>
            <Button size="small" variant="contained" color="secondary" onClick={() => deleteNote(note._id)}>
              Delete
            </Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};

export default NoteList;
