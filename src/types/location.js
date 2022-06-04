class Location {
  constructor (args) {
    this._longitude = args.longitude || ''
    this._latitude = args.latitude || ''
    this._name = args.name || ''
    this._address = args.address || ''
  }

  get longitude () {
    return this._longitude
  }
  get latitude () {
    return this._latitude
  }
  get name () {
    return this._name
  }
  get address () {
    return this._address
  }

  set longitude (value) {
    this._longitude = value
  }
  set latitude (value) {
    this._latitude = value
  }
  set name (value) {
    this._name = value
  }
  set address (value) {
    this._address = value
  }
}

module.exports = Location