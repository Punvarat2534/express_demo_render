const express = require('express')
const router = express.Router()
const trdcontroller = require('../../controllers/api/trd')

// รายการทั้งหมด
router.get('/all', trdcontroller.all)  

router.get('/group', trdcontroller.group)  

router.get('/sonum', trdcontroller.sonum)  

router.post('/login', trdcontroller.login)

router.get('/showdata', trdcontroller.showdata)  

// สร้างรายการ
//router.post('/create', controller.postCreate)
// อัพเดทรายการ
//router.post('/update/:id',controller.postUpdate)
// ลบรายการ
//router.delete('/del/:id', controller.delete)

module.exports = router


