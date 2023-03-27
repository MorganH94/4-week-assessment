const compliment = require('./index')
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
    createCompliment: (req, res) => {
        const {name, meaning} = req.body;
        
        let newMeaningfulCompliment = {
            name: name, 
            meaning: +meaning,  
            id: globalID
        }

        compliment.push(newMeaningfulCompliment)
        globalID++; 
        res.status(200).send(compliment)
    },
    deleteCompliment: (req, res) => {
        const {id} = req.params;
        let index = compliment.findIndex((elem) => elem.id === +id)
        compliment.splice(index, 1)
        res.status(200).send(compliment)
    },
    updateOldCompliment: (req, res) => {
        const {type} = req.body;
        let index = compliment.findIndex((elem) => elem.id === +req.params.id)
        if(type === 'minus' && compliment[index]. rating > 1){
            compliment[index].rating -= 1;
            res.status(200).send(compliment)
        } else if(type === 'plus' && compliment[index].rating < 5){
            compliment[index].rating += 1;
            res.status(200).send(compliment)
        } else {
            res.status(400).send('Invalid')
        }
    }
    
}