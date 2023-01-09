const { default: axios } = require("axios");
const request = require("supertest");
const scrapService = require("../scrap");
const app  = require('../../index')


const expectedData = [
    {
    "word": "to",
    "frequency": 11
    },
    {
    "word": "the",
    "frequency": 10
    },
    {
    "word": "and",
    "frequency": 6
    },
    {
    "word": "team",
    "frequency": 5
    },
    {
    "word": "Manage",
    "frequency": 4
    },
    {
    "word": "Get",
    "frequency": 4
    },
    {
    "word": "Started",
    "frequency": 4
    },
    {
    "word": "everyone",
    "frequency": 4
    },
    {
    "word": "software",
    "frequency": 3
    },
    {
    "word": "tasks",
    "frequency": 3
    },
    {
    "word": "all",
    "frequency": 3
    },
    {
    "word": "your",
    "frequency": 3
    },
    {
    "word": "is",
    "frequency": 3
    },
    {
    "word": "progress",
    "frequency": 3
    },
    {
    "word": "Go",
    "frequency": 3
    },
    {
    "word": "from",
    "frequency": 3
    },
    {
    "word": "you",
    "frequency": 3
    },
    {
    "word": "keeps",
    "frequency": 3
    },
    {
    "word": "us",
    "frequency": 3
    },
    {
    "word": "Pricing",
    "frequency": 2
    },
    {
    "word": "About",
    "frequency": 2
    },
    {
    "word": "Us",
    "frequency": 2
    },
    {
    "word": "Careers",
    "frequency": 2
    },
    {
    "word": "Community",
    "frequency": 2
    },
    {
    "word": "build",
    "frequency": 2
    },
    {
    "word": "for",
    "frequency": 2
    },
    {
    "word": "day-to-day",
    "frequency": 2
    },
    {
    "word": "larger",
    "frequency": 2
    },
    {
    "word": "in",
    "frequency": 2
    },
    {
    "word": "without",
    "frequency": 2
    },
    {
    "word": "Our",
    "frequency": 2
    },
    {
    "word": "how",
    "frequency": 2
    },
    {
    "word": "at",
    "frequency": 2
    },
    {
    "word": "of",
    "frequency": 2
    },
    {
    "word": "reports",
    "frequency": 2
    },
    {
    "word": "track",
    "frequency": 2
    },
    {
    "word": "need",
    "frequency": 2
    },
    {
    "word": "one",
    "frequency": 2
    },
    {
    "word": "more",
    "frequency": 2
    },
    {
    "word": "“Manage",
    "frequency": 2
    },
    {
    "word": "our",
    "frequency": 2
    },
    {
    "word": "on",
    "frequency": 2
    },
    {
    "word": "allows",
    "frequency": 2
    },
    {
    "word": "It",
    "frequency": 2
    },
    {
    "word": "I",
    "frequency": 2
    },
    {
    "word": "Frontend",
    "frequency": 1
    },
    {
    "word": "Mentor",
    "frequency": 1
    },
    {
    "word": "|",
    "frequency": 1
    },
    {
    "word": "landing",
    "frequency": 1
    },
    {
    "word": "page",
    "frequency": 1
    },
    {
    "word": "Product",
    "frequency": 1
    },
    {
    "word": "Bring",
    "frequency": 1
    },
    {
    "word": "together",
    "frequency": 1
    },
    {
    "word": "better",
    "frequency": 1
    },
    {
    "word": "products.",
    "frequency": 1
    },
    {
    "word": "makes",
    "frequency": 1
    },
    {
    "word": "it",
    "frequency": 1
    },
    {
    "word": "simple",
    "frequency": 1
    },
    {
    "word": "teams",
    "frequency": 1
    },
    {
    "word": "plan",
    "frequency": 1
    },
    {
    "word": "while",
    "frequency": 1
    },
    {
    "word": "keeping",
    "frequency": 1
    },
    {
    "word": "goals",
    "frequency": 1
    },
    {
    "word": "view.",
    "frequency": 1
    },
    {
    "word": "What’s",
    "frequency": 1
    },
    {
    "word": "different",
    "frequency": 1
    },
    {
    "word": "about",
    "frequency": 1
    },
    {
    "word": "Manage?",
    "frequency": 1
    },
    {
    "word": "provides",
    "frequency": 1
    },
    {
    "word": "functionality",
    "frequency": 1
    },
    {
    "word": "needs,",
    "frequency": 1
    },
    {
    "word": "complexity.",
    "frequency": 1
    },
    {
    "word": "tailor-made",
    "frequency": 1
    },
    {
    "word": "modern",
    "frequency": 1
    },
    {
    "word": "digital",
    "frequency": 1
    },
    {
    "word": "product",
    "frequency": 1
    },
    {
    "word": "teams.",
    "frequency": 1
    },
    {
    "word": "01Track",
    "frequency": 1
    },
    {
    "word": "company-wide",
    "frequency": 1
    },
    {
    "word": "See",
    "frequency": 1
    },
    {
    "word": "fit",
    "frequency": 1
    },
    {
    "word": "into",
    "frequency": 1
    },
    {
    "word": "wider",
    "frequency": 1
    },
    {
    "word": "vision.",
    "frequency": 1
    },
    {
    "word": "tracking",
    "frequency": 1
    },
    {
    "word": "milestone",
    "frequency": 1
    },
    {
    "word": "level",
    "frequency": 1
    },
    {
    "word": "way",
    "frequency": 1
    },
    {
    "word": "done",
    "frequency": 1
    },
    {
    "word": "smallest",
    "frequency": 1
    },
    {
    "word": "details.",
    "frequency": 1
    },
    {
    "word": "Never",
    "frequency": 1
    },
    {
    "word": "lose",
    "frequency": 1
    },
    {
    "word": "sight",
    "frequency": 1
    },
    {
    "word": "bigger",
    "frequency": 1
    },
    {
    "word": "picture",
    "frequency": 1
    },
    {
    "word": "again.",
    "frequency": 1
    },
    {
    "word": "02",
    "frequency": 1
    },
    {
    "word": "Advanced",
    "frequency": 1
    },
    {
    "word": "built-in",
    "frequency": 1
    }
    ]

const URL = '/?url=https://haseebasim.github.io/manage-landing-page'
const WRONG_URL = '/?url=https://haseebasim.github.io/manage-landing-pag'

describe('Url testing', () => { 

    //Check data if urls return correct data
    it('check data return', function(done){
        request(app).get(URL).then(res=>{
            expect(res.status).toEqual(200)
            expect(res.body).toEqual(expectedData)
            done()
        })
    });

    // check if url correct or return error

    it('should return 400',function(done){
        request(app).get(WRONG_URL).then(res=>{
            expect(res.status).toEqual(400)
            done()
        })
    });
   
})

