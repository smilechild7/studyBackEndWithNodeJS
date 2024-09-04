// ‘/users’ 경로로 요청할 때 사용자의 이름을 받아서
// ‘Hello, Kyunghee!’ 처럼 인사말을 반환하는 API를 작성해 보세요.

import express from "express";

const app = express();
const port = 3000;

app.get('/users/:id',(req, res)=> {
    res.status(200).send(`Hello! ${req.params.id}!`);
});

app.listen(port, ()=>{
    console.log(`${port}번 포트에서 서버 실행 중...`);
});
