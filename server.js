const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const data = [];

// GET all items
app.get('/items', (req, res) => {
  res.json(data);
});

// GET specific item by ID
app.get('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = data.find((item) => item.id === id);
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

// POST 
app.post('/items', (req, res) => {
    const newItem = req.body;
    data.push(newItem);
    res.status(201).json(newItem);
  });


// PUT (update) an existing item by ID
app.put('/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedItem = req.body;
    const index = data.findIndex((item) => item.id === id);
  
    if (index !== -1) {
      data[index] = updatedItem;
      res.json(updatedItem);
    } else {
      res.status(404).json({ message: 'Item not found' });
    }
  });