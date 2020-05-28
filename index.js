// Require packages:
const express = require("express"),
    matter = require('gray-matter'),
    md = require("markdown-it")(),
    fs = require("fs");

// Setup some variables:
const application = express(),
    port = 6738,
    views = "./views/",
    postsDir = views + "content/"

// Set the view engine & views folder:
application
    .set("view engine", "ejs")
    .set("views", views);

// Routes:
application
    .get("/", (req, res) => {
        res.render("main")
    })
    .get("/content", (req, res) => {
        let posts = fs.readdirSync(postsDir).filter(file => file.endsWith(".md"));
        res.render("content/index", { posts: posts });
    })
    .get("/content/:article", (req, res) => {
        let file = matter.read(postsDir+req.params.article+".md")
        let result = md.render(file.content);

        res.render("content/blog", {
            post: result,
            title: file.data.title,
            description: file.data.description
        });
    })

// Listen:
application
    .listen(port, () => 
        console.log(`The app is listening at: http://localhost:${port}`)
    );
