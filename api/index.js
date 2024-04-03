import datos from "./datos.json";
const cors = require('cors');
const express = require('express');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.static('public'));

const PORT = 3002;

// Endpoint para obtener todas las series
app.get("/api/series", (req, res) => {
    res.send(datos);
});


// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});