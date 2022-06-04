class Address {
  constructor (args) {
    this._street = args.street || ''
    this._city = args.city || ''
    this._state = args.state || ''
    this._zip = args.zip || ''
    this._country = args.country || ''
    this._country_code = args.country_code || ''
    this._type = args.type || ''
  }

  get street () {
    return this._street
  }
  get city () {
    return this._city
  }
  get state () {
    return this._state
  }
  get zip () {
    return this._zip
  }
  get country () {
    return this._country
  }
  get country_code () {
    return this._country_code
  }
  get type () {
    return this._type
  }

  set street (value) {
    this._street = value
  }
  set city (value) {
    this._city = value
  }
  set state (value) {
    this._state = value
  }
  set zip (value) {
    this._zip = value
  }
  set country (value) {
    this._country = value
  }
  set country_code (value) {
    this._country_code = value
  }
  set type (value) {
    this._type = value
  }
}

module.exports = Address