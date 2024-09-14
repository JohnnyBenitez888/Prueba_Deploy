/* Levantando el servidor */
const express = require("express");
const path = require("path");
const server = express();

server.use(express.static('public'));


server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server running on http://localhost: ${PORT}`));




/* ---------------------------------------------------------------------------------------------------------------------------- */


/* var data = fs.readFileSync("test.txt", 'utf8');

console.log(data);
console.log("Otras Tareas"); 

import { add, subtract } from './utility.mjs';

console.log(add(88,12));
console.log(subtract(88,12));*/