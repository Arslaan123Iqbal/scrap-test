const axios = require("axios");
const cheerio = require("cheerio");
const {URL} = require("url")
const scrap = async (req,res) => {
    const stringIsAValidUrl = (s, protocols) => {
        try {
            url = new URL(s);
            return protocols
                ? url.protocol
                    ? protocols.map(x => `${x.toLowerCase()}:`).includes(url.protocol)
                    : true
                : false;
        } catch (err) {
            return false;
        }
    };
    const url = (req.query.url);

        async function getText() {

                const response = await axios.get(url);
                const html = response.data;
                const $ = cheerio.load(html);
                let newtext= $.text();
                return newtext;
            
          }

    if(!stringIsAValidUrl(url)){
        getText().then(nt=>{
            const ntarray = nt.split(" ").map(element => element.replace(/^\/n$|^$/g, '').trim()).filter(element => element !== '');
            const frequency = {};

            // iterate through the list and update the frequency of each element
            for (const element of ntarray) {
            if (element in frequency) {
                frequency[element]++;
            } else {
                frequency[element] = 1;
            }
            }
            const sortedWords = Object.keys(frequency).sort((a, b) => frequency[b] - frequency[a]);

        
            res.send(sortedWords.slice(0, 100).map(word => ({ word, frequency: frequency[word] })))
        }).catch(()=>{return res.status(400).send("Please check url")});
    }
}

module.exports = scrap;