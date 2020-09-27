 const express = require('express')
 const nunjucks = require('nunjucks')

 const server = express()
 const videos = require("./data")

 server.use(express.static('public'))

 server.set("view engine", "njk")

 nunjucks.configure("views", {
     express:server,
     autoescape: false,
     noCache:true
 })

server.get("/", function(req, res){
    const data = {
        avatar:"https://avatars0.githubusercontent.com/u/60299840?s=400&u=975217360b1d0c7a730b3ef163560a420ca40594&v=4",
        nome:"Lporchat",
        role:">Desenvolvedor junior Full-Stack",
        descricao:'Desenvolvedor full-stack em desenvolvimento. Um dos criadores da  <a target="_blank" href="https://google.com">Shooting Stars. </a>',
        links:[
            {nome: "GitHub", url: "https://github.com/Lporchart"},
            {nome: "facebook", url: "https://www.facebook.com/Lkouuhaku/"},
            {nome: "twitter", url: "https://twitter.com/Reonardo_kun"}
        ]
    }
    return res.render("about", {data : data })
})

server.get("/classes", function(req, res){
    return res.render("classes", {itens : videos})
})

server.get("/noticias", function(req, res){
    return res.render("noticias")
})

 server.listen(5000,function(){
     console.log("server its rodsadannning")
 })