class Name {
  constructor (args) {
    if (!args.formatted_name) {
      throw new Error('Required formatted_name argument')
    }

    this._formatted_name = args.formatted_name || ''
    this._first_name = args.first_name || []
    this._last_name = args.last_name || ''
    this._middle_name = args.middle_name || []
    this._suffix = args.suffix || {}
    this._prefix = args.prefix || []
  }

  get formatted_name () {
    return this._formatted_name
  }
  get first_name () {
    return this._first_name
  }
  get last_name () {
    return this._last_name
  }
  get middle_name () {
    return this._middle_name
  }
  get suffix () {
    return this._suffix
  }
  get prefix () {
    return this._prefix
  }

  set formatted_name (value) {
    this._formatted_name = value
  }
  set first_name (value) {
    this._first_name = value
  }
  set last_name (value) {
    this._last_name = value
  }
  set middle_name (value) {
    this._middle_name = value
  }
  set suffix (value) {
    this._suffix = value
  }
  set prefix (value) {
    this._prefix = value
  }
}

module.exports = Name