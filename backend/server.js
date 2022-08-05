const express = require('express');
const cors = require('cors');
require('dotenv').config();
PORT = process.env.PORT || 8080;



//conexión a la DB de Mongo local
require('./database/conexion');
const PersonaController = require('./controllers/persona');


const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(cors())
 

//endpoints
app.get('/', async (req, res) => {
    res.json({
        personas: await PersonaController.findAll()
    });
});

app.post('/crear', async (req, res) => {
    await PersonaController.create(req.body);
    res.json('Producción creada y guardada en DB');
});


app.delete("/eliminar/:id", async (req, res) => {
    const { id } = req.params;
    await PersonaController.delete(id);
    res.json("Producción eliminada de la DB");
  });


app.listen(PORT, () => {
    console.log(`Servidor escuchando por el Puerto: ${PORT}`);
});
