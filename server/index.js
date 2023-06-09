const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getNewCompliment, createCompliment, deleteCompliment, updateOldCompliment} = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/compliment", getNewCompliment);
app.post('/api/compliment', createCompliment)
app.delete('/api/compliment/:id', deleteCompliment)
app.put('/api/compliment/:id', updateOldCompliment)

app.listen(4000, () => console.log("Server running on 4000"));
