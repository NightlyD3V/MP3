const express = require('express')
const app = express()
const port = 3000
// CORS
const cors = require("cors")
app.use(
    cors ({
        origin: '*' 
    })
)
const fs = require('fs')

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/songs', (req, res) => {
    let getData = (callback) => {
        let data = []
        fs.readdir('../../playlist', (err, files) => {
            if(err) {
                console.log(err)
            } else {
                files.forEach(file => {
                    data.push(file.toString())
                    // console.log(data)
                })
            }
            console.log(data)
            callback(data)
        })
    }
    getData(data => res.send(data))

})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})