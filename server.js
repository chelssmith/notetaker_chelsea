const express = require('express');
const apiRoutes = require("./routes/apiRoutes")
const htmlRoutes = require('./routes/htmlRoutes');


// intialize our app to create a port

const app = express ();
const PORT = process.env.PORT || 3000;

// sets up body parsing to route our middleware 
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use("/api", apiRoutes);
app.use('/', htmlRoutes);


// start server on our port 
app.listen(PORT, () => console.log(`listening on PORT: ${PORT}`));

