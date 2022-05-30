const constants = require('./constants/prod')

class WhatsAppCloudApi {
  constructor (params) {
    this._verifyToken = params.verifyToken;
    this._appToken = params.appToken
  }

  sendMessage (data) {
    return this.#send(data)
  }

  #send (data) {
    return axios({
      method: 'POST',
      url: `${constants.META_API_ENDPOINT}${constants.META_API_VERSION}/${data.phone_number_id}/${constants.MESSAGES.ENTRY_POINT}${this._appToken}`,
      data: {
        messaging_product: constants.MESSAGING_PRODUCT,
        to: data.from,
        text: { body: data.message.body },
      },
      headers: { 'Content-Type': 'application/json' },
    })
  }
}

module.exports = WhatsAppCloudApi
