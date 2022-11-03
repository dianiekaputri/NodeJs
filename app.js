const express = require("express");
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use("/js", express.static(__dirname +"public/js"));
app.use("/css", express.static(__dirname +"public/css"));

app.set('views', "./views")
app.set('view engine', 'ejs');
app.get("/", (req, res)=>{
    res.render('index')
})

app.get("/forgot", (req, res)=>{
    res.render('forgot')
})

app.listen(port, () => console.log('Aplikasi ini berjalan di localhost'));