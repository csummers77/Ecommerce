var express = require('express');
var router = express.Router();

router.get('/getHome',(req,res)=>{
    res.json("Games");
})
module.exports = router;