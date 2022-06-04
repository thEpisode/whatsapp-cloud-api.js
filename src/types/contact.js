class Contact {
  constructor (args) {
    if (!args.name) {
      throw new Error('Required name argument')
    }

    this._name = args.name || ''
    this._addresses = args.addresses || []
    this._birthday = args.birthday || ''
    this._emails = args.emails || []
    this._org = args.org || {}
    this._phones = args.phones || []
    this._urls = args.urls || []
  }

  get name () {
    return this._name
  }
  get addresses () {
    return this._addresses
  }
  get birthday () {
    return this._birthday
  }
  get emails () {
    return this._emails
  }
  get org () {
    return this._org
  }
  get phones () {
    return this._phones
  }
  get urls () {
    return this._urls
  }

  set name (value) {
    this._name = value
  }
  set addresses (value) {
    this._addresses = value
  }
  set birthday (value) {
    this._birthday = value
  }
  set emails (value) {
    this._emails = value
  }
  set org (value) {
    this._org = value
  }
  set phones (value) {
    this._phones = value
  }
  set urls (value) {
    this._urls = value
  }
}

module.exports = Contact