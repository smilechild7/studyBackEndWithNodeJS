import express from "express";
import path from "path";
// express를 실행하면 app이라는 서버가 만들어진다. 익스프레스의 기능 사용 가능.
const app = express();
const router = express.Router();
const port = 3000;

// HTTP 요청 (GET, POST, PUT, ...) 중 GET 요청을 처리하려면 get 함수를 사용. 
// 즉 루트 경로에서 GET 요청을 하면 뒤에 오는 콜백함수를 실행하라는 뜻이다.
app.get("/", (req, res) => { 
    res.status(200);

    //const headers = req.headers;
    //res.send(headers);
    // res.json({ message : "Hello Node!" });

    res.send("Hello Node!");
    // res.sendFile(import.meta.dirname + "/assets/contacts.html");
});

// 모든 연락처 가져오기 (GET)
app.get("/contacts", (req, res) => {
    res.status(200).send("Contacts Page");
});

// 새 연락처 추가하기 (POST)
app.post("/contacts", (req, res) => {
    res.status(201).send("Create Contacts");
});

// 연락처 상세 보기
app.get("/contacts/:id", (req, res) => {
    res.status(200).send(`View Contact for ID : ${req.params.id}`)
});

// 연락처 수정하기
app.put("/contacts/:id", (req, res) => {
    res.status(200).send(`Update Contact for ID : ${req.params.id}`)
});

// 연락처 삭제하기
app.delete("/contacts/:id", (req, res) => {
    res.status(200).send(`Delete Contact for ID : ${req.params.id}`)
});

// router.route("/contacts")
//     .get((req, res) => {})
//     .post((req, res) => {});

// router.route("/contacts/:id")
//     .get((req, res) => {})
//     .post((req, res) => {})
//     .delete((req, res) => {});



// 지정한 포트로 요청이 들어오는지 리스닝한다. 요청이 들어오면 뒤에 오는 콜백함수를 실행.
app.listen(port, ()=>{
    console.log(`${port}번 포트에서 서버 실행 중`);
});