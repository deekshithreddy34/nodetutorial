const http=require('http')

const server=http.createServer((req,res)=>{
   
    if(req.url==="/"){
        res.end("this is your page")
        return
    }

    if(req.url==="/about"){
        res.end("this is about page")
        return
    }

    res.end(`
        <h1>OOPs</h1>
        <p>something went wrong wrong url"</p>
        <a href="/">back home</a>`  
    )
})

server.listen(5000)