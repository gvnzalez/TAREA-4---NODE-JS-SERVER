const express = require('express');
const app = express();
const port = 3000

app.get('/', (req, res) => {
    res.send('Opcion /home retorna Home, Opcion /contact retorna Contáctanos, Opcion /products retorna Productos, Opcion /products/abc123 retorna Productos abc123');
});

app.get('/home', (req, res) => {
    res.send('Home');
});

app.get('/contact', (req, res) => {
    res.send('Contáctanos');
});

app.get('/products', (req, res) => {
    res.send('Productos');
});


app.get('/products/abc123', (req, res) => {
    res.send('Productos abc123');
});

app.listen(port, () => {
 console.log(`Server listening on http://localhost:${port}`);
});