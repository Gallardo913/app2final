const express = require('express');

const app = express();

//ROUTES
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));



const PORT = process.env.PORT || 3000

app.listen(PORT, console.log(`Server is running at the moment...${PORT}`));