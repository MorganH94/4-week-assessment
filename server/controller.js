const niceCompliments = require('./index')
let globalID = 5;

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getNewCompliment: (req, res) => {
        const compliments1 = ["You matter.", "You have great influence on others.", "You are loved.", "Great things are coming your way.", "You can do anything."];
      
        let randomIndex = Math.floor(Math.random() * compliments1.length);
        let randomNewCompliment = compliments1[randomIndex];
      
        res.status(200).send(randomNewCompliment);
    },
    
}