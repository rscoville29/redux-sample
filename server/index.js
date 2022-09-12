const PORT = process.env.PORT || 8080;
const app = require("./app");


const init = async () => {
    try{
        app.listen(PORT, () => console.log(`Mixing it up on port ${PORT}`));
    
    // start listening (and create a 'server' object representing our server)
  } catch (err) {
    console.log(err);
  }
};

init();