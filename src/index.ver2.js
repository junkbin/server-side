let express = require('express');
let cors = require('cors')
let bodyParser = require('body-parser')


let app = express();

// for cross origin request.
app.use(cors());

// parse application/json
app.use(bodyParser.json());


/** GET RETURNS ALL PRODUCT */
app.get("/", function(req, res) {
    let output = [
        {productId: 1, productName : 'VIVO',  categoryName: 'Mobile', categoryId: 'V100'}
    ];
    res.json(output);
});


/** POST SAVE PRODUCT INTO DB */
app.post("/", function(req, res){
    let inputRequest = req.body;
    
    res.json(inputRequest);
});


/** STARTHE THE SERVER */
app.listen(3000, function() {
    console.log('server.started');
});