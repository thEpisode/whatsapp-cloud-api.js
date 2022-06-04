class Organization {
  constructor (args) {
    this._company = args.company || ''
    this._department = args.department || ''
    this._title = args.title || ''
  }

  get company () {
    return this._company
  }
  get department () {
    return this._department
  }
  get title () {
    return this._title
  }

  set company (value) {
    this._company = value
  }
  set department (value) {
    this._department = value
  }
  set title (value) {
    this._title = value
  }
}

module.exports = Organization