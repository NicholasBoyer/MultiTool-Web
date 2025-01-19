
const express = require('express');
const app = express();
const PORT = 3000;

// Import routes
indexRouter = require('./routes/index');

// Use routes
app.use('/', indexRouter);

// Start server
app.listen(PORT, () => {
    console.log("Running frontend on http://localhost${PORT}");
});
