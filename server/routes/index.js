const Router = require('express')
const router = new Router()
const tableRouter = require('./tableRouter')
const userRouter = require('./userRouter')

router.use('/table', tableRouter)
router.use('/user', userRouter)


module.exports = router
