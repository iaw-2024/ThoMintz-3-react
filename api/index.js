import datos from "./datos.json" assert { type: 'json' };
import cors from 'cors';
import express from 'express';
import path, { dirname } from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.static(path.resolve(__dirname, "..", "client", "build")));

const PORT = 3002;

// Endpoint para obtener todas las series
app.get("/datos", (req, res) => {
    res.send(datos);
});


// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});