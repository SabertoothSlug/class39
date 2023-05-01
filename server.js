const express = require('express')
const app=express()
const PORT=8000

const rappers = {
    'slug': {
        'birthName':'Sean Michael Daley',
        'birthLocation':'Minneapolis, Minnesota',
        'age': 50
    },
    'ant': {
        'birthName':'Anthony Davis',
        'birthLocation':'Minneapolis, Minnesota',
        'age': 52
    },
    'unknown':{
        'birthName': 'unknown',
        'birthLocation':'unknown',
        'age': 0
    }
    
}

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req,res)=>{
    const rapName=req.params.name.toLowerCase()
    if(rappers[rapName]){
        res.json(rappers[rapName])
    }else{
        res.json(rappers['unknown'])
}
})
    



app.listen(PORT , ()=>{
    console.log(`The server is now running on ${PORT}! Fly port, not aft!`)
})