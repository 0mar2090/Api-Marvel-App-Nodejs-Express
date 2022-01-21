// dependencies
const express = require('express');
const PORT = 3001;
const app = express();

// using express 
app.use(express.static("public"));

// Set Handlebars
const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// requiring routes 
require("./routes/handlebars-routes")(app);

//  run server
app.listen(PORT, () => {
    console.log('App listening on PORT http://localhost:' + PORT);
});
