const { app, port } = require('./server.js');

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}/v2/`);
});