

import express from "express";
const app = express();
const port = 3000;

// '/' 경로로 GET 요청했을 때 사용자 정보(users)를 JSON 형태로 응답하는 미들웨어를 작성하세요.
const users = [
  { id: 1, name: "Kim" },
  { id: 2, name: "Lee" },
  { id: 3, name: "Park" },
];

app.get("/users", (req, res) => {
  res.json(users);
});

app.listen(port, ()=> {
  console.log(`App is running on ${port}`);
});

