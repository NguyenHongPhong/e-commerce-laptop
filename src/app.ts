import express = require('express');
import 'dotenv/config';
import WebRouter from './routes';
import getConnection from '@config/database';
import methodOverride = require('method-override')

const app = express();

const port = process.env.PORT;

app.use(express.static('public'));

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

WebRouter(app);

getConnection();
app.listen(port, () => {
    console.log(`My app is running on ${port}`);
});