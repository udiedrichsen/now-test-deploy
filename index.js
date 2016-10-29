const app = require('express')();
app.get('/', (req, res) => {
  res.send("Welcome to this amazing with now deployed web page :-)");
});
app.listen(3000);
