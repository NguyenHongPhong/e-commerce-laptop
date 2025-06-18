import express = require('express');
import 'dotenv/config';
import WebRouter from './routes';

const app = express();

const port = process.env.PORT;

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

WebRouter(app);

app.listen(port, () => {
    console.log(`My app is running on ${port}`);
});