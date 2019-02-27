const express = require("express")
const bodyParser = require("body-parser")

const app = express();
app.use(bodyParser.json());

const database = {
    users : [
        {
            id: '1234',
            name: 'Jonathan',
            email: 'bklynbest718@gmail.com',
            password: 'tonymontana',
            entries: '0',
            joined: new Date()
        },
        {
            id: '124',
            name: 'Jason',
            email: 'bklynbe@gmail.com',
            password: 'tonymontana3',
            entries: '0',
            joined: new Date()
        }
    ]
}


app.get('/' ,(req, res, err) => {
    res.send(database.users)
    
})
app.post('/signin', (req, res) => {
    if (req.body.email === database.users[0].email && 
        req.body.password === database.users[0].password) {
        res.json('Signed in')
    } else {
        res.status(400).json('RIP')
    }
})

app.post('/register', (req, res) => {
    const {email, name, password } = req.body
    const lastUser = database.users[database.users.length-1]
    database.users.push({
        id: '12434',
        name: name,
        email: email,
        password: password,
        entries: '0',
        joined: new Date()
    })
    res.status(200).json(lastUser);
    if (res.status != 200) {
        res.status(400).json('RIP')
    }
})

app.listen(8080, () => {
    console.log('everything is working')
})

