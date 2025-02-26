﻿const db = require('../../cores/db/index.js').pg
const yup = require('yup')
const _ = require('lodash')
//const { TB_TRD } = require('./tables')
const transformDatetime = require('../../utils/transform-datetime')
const dayjs = require('dayjs')
dayjs.locale(process.env.LOCALE)

class tb_trd_model{

  constructor(attributes) {
    this.attributes = attributes
    this.db = db
  }

  /*static attributeLabels() {
    return {
      trd_id: 'ไอดี',
      trd_code: 'รหัสผู้ขายเศษเหล็ก',
      trd_title: 'ชื่อต้น',
      trd_name: 'ชื่อผู้ขายเศษเหล็ก',
      trd_adr1: 'ที่อยู่1',
      trd_adr2: 'ที่อยู่2',
      trdsap_code: '',
      prov_id: 'รหัสจังหวัด',
      zip_code: 'รหัสไปรษณีย์',
      cn_p1: 'ชื่อผู้ติดต่อ1',
      cn_p1_tel: 'เบอร์โทรผู้ติดต่อ1',
      cn_p2: 'ชื่อผู้ติดต่อ2',
      cn_p2_tel: 'เบอร์โทรผู้ติดต่อ2',
      cn_p3: 'ชื่อผู้ติดต่อ3',
      cn_p3_tel: 'เบอร์โทรผู้ติดต่อ3',
      fax1: 'Fax',
      fax2: 'Fax',
      trd_email: 'อีเมล',
      trd_profile: '',
      trd_status_id: 'สถานะ',
      user_id: 'รหัสผู้ใช้งาน',
      created_at: 'วัน,เวลาที่บันทึก',
      updated_at: 'วัน,เวลาที่แก้ไข',
      created_by: 'ผู้บันทึก',
      updated_by: 'ผู้แก้ไข',
    }
  }

  static schemas() {
    return yup.object().shape({
      trd_id: yup.number().integer(),
      trd_code: yup.string().required('invalid trd_code.'),
      trd_title: yup.string().required('invalid trd_title.'),
      trd_name: yup.string().required('invalid trd_title.'),
      trd_adr1: yup.string().notRequired(),
      trd_adr2: yup.string().notRequired(),
      trdsap_code: yup.string().notRequired(),
      prov_id: yup.number().integer().notRequired(),
      zip_code: yup.string().max(10).notRequired(),
      cn_p1: yup.string().notRequired(),
      cn_p1_tel: yup.string().max(20).notRequired(),
      cn_p2: yup.string().notRequired(),
      cn_p2_tel: yup.string().max(20).notRequired(),
      cn_p3: yup.string().notRequired(),
      cn_p3_tel: yup.string().max(20).notRequired(),
      fax1: yup.string().notRequired(),
      fax2: yup.string().notRequired(),
      trd_email: yup.string().email().notRequired(),
      trd_profile: yup.string().notRequired(),
      trd_status_id: yup.number().integer().notRequired(),
      user_id: yup.number().integer().notRequired(),
      created_at: yup
        .string()
        .notRequired()
        .transform(transformDatetime)
        .default(() => dayjs().format('YYYY-MM-DD HH:mm:ss')),
      updated_at: yup
        .string()
        .notRequired()
        .transform(transformDatetime)
        .default(() => dayjs().format('YYYY-MM-DD HH:mm:ss')),
      created_by: yup.number().integer(),
      updated_by: yup.number().integer(),
    })
  }

  static find(columns = '*') {
    return this.db.select(columns).from(this.tableName)
  }

  static findOneById = (id) => {
    return this.find().where('trd_id', id).first()
  }

  static findOneByUserId = (userId) => {
    return this.find().where('user_id', userId).first()
  }

  static deleteById(id) {
    return this.delete({ trd_id: id })
  }

  static delete(params) {
    return this.db(this.tableName).where(params).del()
  }

  save() {
    if (!this.attributes) throw new Error('attributes not set.')
    
    let attributes = _.omit(this.attributes, ['trd_id'])
    
    if (_.get(this.attributes,'trd_id')) {
      // update
      return this.db(this.tableName)
        .where('trd_id', this.attributes.trd_id)
        .update(this.attributes)
    } else {
      // create
      return this.db(this.tableName).insert(this.attributes)
    }
  }*/
}

//tb_trd_model.tableName = TB_TRD
tb_trd_model.db = db

module.exports = tb_trd_model