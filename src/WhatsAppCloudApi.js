const constants = require('./constants/prod')
const axios = require('axios')

class WhatsAppCloudApi {
  constructor (params) {
    this._verifyToken = params.verifyToken;
    this._appToken = params.appToken
  }

  sendMessage (data) {
    if (!data || !data.message || !data.message.body) {
      throw new Error('Required WhatsApp data to process this message')
    }

    return this.#send(data)
  }

  #send (data) {
    if (!this._appToken) {
      throw new Error('Required WhatsApp Token to process this message')
    }

    if (!data.to.phoneNumber) {
      throw new Error('Required WhatsApp phoneNumber to process this message')
    }

    switch (data.type) {
      case 'text':
      default:
        return this.#sendTextMessage(data)
        break;
    }
  }

  #sendTextMessage (data) {
    return axios({
      method: 'POST',
      url: `${constants.META_API_ENDPOINT}${constants.META_API_VERSION}/${data.from.phoneNumber}/${constants.MESSAGES.ENTRY_POINT}${this._appToken}`,
      data: {
        messaging_product: constants.MESSAGING_PRODUCT,
        to: data.to.phoneNumber,
        text: { body: data.message.body || '' },
      },
      headers: { 'Content-Type': 'application/json' },
    })
  }
}

module.exports = WhatsAppCloudApi
