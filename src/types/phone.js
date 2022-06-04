class Phone {
  constructor (args) {
    this._phone = args.phone || ''
    this._type = args.type || ''
    this._wa_id = args.wa_id || ''
  }

  get phone () {
    return this._phone
  }
  get type () {
    return this._type
  }
  get wa_id () {
    return this._wa_id
  }

  set phone (value) {
    this._phone = value
  }
  set type (value) {
    this._type = value
  }
  set wa_id (value) {
    this._wa_id = value
  }
}

module.exports = Phone