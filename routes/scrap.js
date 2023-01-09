const scrap = require("../controller/scrap");
const router = require("express").Router();
router.get("/",(req,res)=>{
    return res.send("Node app for scraping text")
})
//routes for url
//http://{domain}/link?url=https://haseebasim.github.io/manage-landing-page/

router.get("/link",scrap);
module.exports = router;