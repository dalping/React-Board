const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/board', (req,res) => {
    res.send([
       {
           'id': 1,
           'name' : "꼬부기",
           'title': "안녕",
           'content': "반갑습니다."
       } ,
       {
        'id': 2,
        'name' : "아기감자",
        'title': "로미니",
        'content': "귀여웡."
        },
        {
            'id': 3,
            'name' : "하기싫다",
            'title': "왜하는겨",
            'content': "짜증나"
        } 
     ]);
});

app.listen(port,()=>console.log(`Listen on port ${port}`));