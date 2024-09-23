import express from "express";
import contactRoutes from "./routes/contactRoutes.js";


const app = express();
const port = 3000;

const requestTime = (req, res, next) =>{
    let today = new Date(); // Date 객체 만들기
    let now = today.toLocaleTimeString(); // 현재 시간을 문자열로 바꾸기
    req.requestTime = now; // req 객체에 requestTime 속성 추가하기
    next();
};

app.use(requestTime);


app.get("/", (req, res) => {
    const responseText = `Hello Node! \n 요청 시간 : ${req.requestTime}`;
    res.set("Content-type", "text/plain");
    res.send(responseText);
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/contacts", contactRoutes);


app.listen(port, ()=>{
    console.log(`${port}번 포트에서 서버 실행 중`);
});