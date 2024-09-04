const express = require("express");

// express를 실행하면 app이라는 서버가 만들어진다. 익스프레스의 기능 사용 가능.
const app = express();
const port = 3000;

// HTTP 요청 (GET, POST, PUT, ...) 중 GET 요청을 처리하려면 get 함수를 사용. 
// 즉 루트 경로에서 GET 요청을 하면 뒤에 오는 콜백함수를 실행하라는 뜻이다.
app.get("/", (req, res) => { 
    res.status(200);
    res.send("Hello Node!");
});

// 지정한 포트로 요청이 들어오는지 리스닝한다. 요청이 들어오면 뒤에 오는 콜백함수를 실행.
app.listen(port, ()=>{
    console.log(`${port}번 포트에서 서버 실행 중`);
});