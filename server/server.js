const express = require('express')
const app = express()
const port = 7000


app.listen(port, () => {
    console.log("server runnning on port " + `${port}`)
})