class URL {
  constructor (args) {
    this._url = args.url || ''
    this._type = args.type || ''
  }

  get url () {
    return this._url
  }
  get type () {
    return this._type
  }

  set url (value) {
    this._url = value
  }
  set type (value) {
    this._type = value
  }
}

module.exports = URL