import express from 'express';

const app = express();

app.use(express.static('./'));

app.listen(8080, ()=> {
    console.log("http://localhost:8080")
});