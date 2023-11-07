const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())
app.get("/", (req, res) => {
    res.send("Express on Vercel");
});

app.use('/api/users', (req, res) => {
    return res.status(200).json({ message: 'good' })
})

app.listen(5000, () => {
    console.log(`server running on 5000`)
})