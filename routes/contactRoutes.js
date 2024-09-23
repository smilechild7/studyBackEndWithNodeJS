import express from "express";
const router = express.Router();

router
    .route("/").get((req, res) => {
        res.status(200).send("Contacts Page");
    })
    .post((req, res) => {
        console.log(req.body);
        const { name, email, phone } = req.body;
        
        if(!name || !email || !phone){
            return res.status(400).send("필수 값이 연결되지 않았습니다.");
        }

        res.status(201).send("Create Contacts");
    });

router.route("/:id").get((req, res) => {
    res.status(200).send(`View Contact for ID : ${req.params.id}`)
})
.put((req, res) => {
    res.status(200).send(`Update Contact for ID : ${req.params.id}`)
})
.delete((req, res) => {
    res.status(200).send(`Delete Contact for ID : ${req.params.id}`)
});

export default router;