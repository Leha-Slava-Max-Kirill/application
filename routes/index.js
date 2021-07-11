const Router = require('express')
const mong = require('mongoose')
const router = /*new*/ Router()
const {Table} = require('../models/models')
const tableRouter = require('./tableRouter')
//const userRouter = require('./userRouter')


router.get('/', async (req, res) => {
    //const {name} = req.query
    //const tables = await Table.findAll({name})
    const tables = await Table.findAll({})

    res.render('index', {
        title: 'MENU',
        isIndex: true,
        tables
    })
})

router.get('/create', (req, res) => {
    res.render('create', {
        title: 'ADMIN panel',
        isCreate: true
    })
})

/*router.post('/create', async (req, res) => {
    const table = new Table({
        name: req.body.name
        //volume: req.body.volume
    })

    await table.save
    res.redirect('/')
})*/

router.use('/create', tableRouter)
//router.use('/user', userRouter)


module.exports = router
