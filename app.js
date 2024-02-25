const express = require("express");
const app = express();

const path = require("path");
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
let posts = [
    {
        id: "1a",
        username: "Lakshay",
        content: "World's a very mean place"
    },
    {
        id: "2b",
        username: "Andrew",
        content: "Show god the beauty of his own creation "
    },
    {
        id: "3c",
        username: "Mike",
        content: "Train like you never win perform like you never lost."
    }
]
app.get("/tweets", (req, res) => {
    res.render("alltweets.ejs", { posts });
})
app.get("/tweets/new", (req, res) => {
    res.render("new.ejs");
})
app.post("/newpost", (req, res) => {
    let post = req.body;
    posts.push(post);
    res.redirect("/tweets")
})
app.get("/tweets/:id",(req,res)=>{
    let {id}=req.params;
    console.log(id);
    let post=posts.find((p)=>id===p.id);
    console.log(post);
    res.render("idtweet.ejs",{post})
})
const port = 8080;
app.listen(port, () => {
    console.log(`app is listening on port :${port}.`)
})