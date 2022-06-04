class Email {
  constructor (args) {
    this._email = args.email || ''
    this._type = args.type || ''
  }

  get email () {
    return this._email
  }
  get type () {
    return this._type
  }

  set email (value) {
    this._email = value
  }
  set type (value) {
    this._type = value
  }
}

module.exports = Email