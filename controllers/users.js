const Users = require('../models/users')

exports.createUser = (req, res, next) => {
    const user = new Users(req.body)
    console.log(req.body)
    user.save().then((data) => {
        console.log(data)
        res.status(201).json(data)
    })
    .catch((error) => {
        console.log(error)
        res.status(401).json(error)
    })
}

exports.getAllUsers = (req, res, next) => {
    Users.find().then((data) => {
        let scoreArray = []
        data.forEach( (item, i) => {
            item.score = parseInt(Math.random() * 101)
            scoreArray.push(item.score)
            console.log(item)
        })
        scoreArray = scoreArray.sort((a,b) => {return b - a})
        let newData = []
       
        scoreArray.forEach((score, i) => {
            data.forEach((item, j) => {
                if (score == item.score) {
                    newData.push(item)
                    console.log(item)
                }
            })
        })
        
        res.status(201).json(newData)
    })
    .catch((error) => {
        console.log(error)
        res.status(401).json(error)
    })
}

exports.getOneUser = (req, res, next) => {
    Users.findOne({
        _id: req.params.id
    }).then((data) => {
        console.log(data)
        if (data === null) {
            res.status(201).json("user does not exist")
        }
        res.status(201).json(data)
    })
    .catch((error) => {
        console.log(error)
        res.status(401).json(error)
    })
}

exports.modifyUser = (req, res, next) => {
    Users.updateOne({_id: req.params.id}, req.body)
    .then((data) => {
        console.log(data)
        res.status(201).json("modify !")
    })
    .catch((error) => {
        console.log(error)
        res.status(401).json(error)
    })
}

exports.deleteUser = (req, res, next) => {
    Users.deleteOne({_id: req.params.id})
    .then((data) => {
        console.log(data)
        res.status(201).json("delete !")
        
    })
    .catch((error) => {
        console.log(error)
        res.status(401).json(error)
    })
}
