const {Table} = require('../models/models')
const ApiError = require('../error/ApiError')


class TableController {
    /*async create(req, res) {
        const {name, volume} = req.body
        const table = await Table.create({name, volume})
        return res.json(table)
    }*/
    async create(req, res, next) {
        try {
            const {name, volume, type, description, degree, price} = req.body
            //const {img} = req.files
            const table = await Table.create({name, type, volume, description, degree, price})
            //
            await table.save
            res.redirect('/')
            //
            // return res.json(table) 
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

   async getAll(req, res) {
        const {name, volume} = req.query
        let tables = await Table.findAll({name, volume})
        //
        // res.render('index')
        //
        return res.json(tables)
        
        /*try {
            const {name, volume} = req.query
            let tables = await Table.findAll({where:{name, volume}})
            return res.json(tables)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }*/
    }

}

module.exports = new TableController()
