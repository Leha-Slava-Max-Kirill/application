require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const Handlebars = require('handlebars');
const cors = require('cors')
const router = require('./routes/index.js')
// hbs
const exphbs = require('express-handlebars')
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');
// hbs
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require('path')
const PORT = process.env.PORT || 5000
const app = express()
// hbs
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs',
    handlebars: allowInsecurePrototypeAccess(Handlebars)
})
  
  app.engine('hbs', hbs.engine)
  app.set('view engine', 'hbs')
  app.set('views', 'views')
// hbs
app.use(express.urlencoded({ extended: true }))

app.use(cors())
app.use(express.json())
//
// app.use(express.static(path.resolve(__dirname, 'views')))
//
//
//app.engine('hbs', )
//
app.use(router)

//
//app.use(router)
//
app.use(errorHandler)


const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()