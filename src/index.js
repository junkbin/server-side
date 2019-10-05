let express = require('express');
let cors = require('cors')

let app = express();

// for cross origin request.
app.use(cors());


app.get("/", function(req, res) {
    let output = {productId: 1, productName : 'VIVO',  categoryName: 'Mobile', categoryId: 'V100'};
    res.json(output);
});

app.post("/", function(req, res){
    let output = {productId: 1, productName : 'VIVO',  categoryName: 'Mobile', categoryId: 'V100'};
    res.json(output);
});


app.listen(3000, function() {
    console.log('server.started');
});