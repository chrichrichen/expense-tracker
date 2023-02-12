const express = require('express')
const router = express.Router()

const record = require('../../models/record')
let totalAmount0 = 0

router.get('/', (req, res) => {
    const userId = req.user._id   
    record.find({ userId })
        .lean()
        .sort({ _id: 'asc' }) 
        .then(records => {
            totalAmount = records.reduce((total, record) => { return total + record.amount }, 0)
            res.render('index', { records, totalAmount })
        })
        .catch(error => console.error(error))
})

router.get("/search", (req, res) => {
    const categoryId = req.query.categoryId
    const userId = req.user._id
    let totalAmount = 0
    if (categoryId > 0) {
        record.find({ userId, categoryId })
            .lean()
            .sort({ _id: 'asc' }) 
            .then(records => {
                records.forEach((record) => {
                    totalAmount += record.amount
                })
                res.render('index', { records, categoryId, totalAmount })
            })
            .catch(errors => console.error(error))
    } else {
        record.find({ userId })
            .lean()
            .sort({ _id: 'asc' }) 
            .then(records => {
                totalAmount = records.reduce((total, record) => { return total + record.amount }, 0)
                res.render('index', { records, totalAmount })
            })
            .catch(error => console.error(error))
    }
})
module.exports = router