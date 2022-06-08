const constants = require('./constants/prod')
const axios = require('axios')

class WhatsAppCloudApi {
  constructor (params) {
    this._verifyToken = params.verifyToken;
    this._appToken = params.appToken
  }

  sendMessage (data) {
    if (!this._appToken) {
      throw new Error('Required WhatsApp Token to process this message')
    }

    if (!data || !data.message || !data.message) {
      throw new Error('Required WhatsApp data and messagge to process this message')
    }

    if (!data.to.phoneNumber) {
      throw new Error('Required WhatsApp phoneNumber to process this message')
    }

    switch (data.type) {
      case 'location':
        return this.#sendLocationMessage(data)
      case 'image':
      case 'video':
      case 'sticker':
        return this.#sendMediaMessage(data)
      case 'list':
      case 'button':
        return this.#sendInteractiveMessage(data)
      case 'contact':
        return this.#sendContactMessage(data)
      case 'text':
      default:
        return this.#sendTextMessage(data)
    }
  }

  #sendTextMessage (data) {
    this.#sendMessage({
      type: constants.TYPES.TEXT,
      to: data.to.phoneNumber,
      text: { body: data.message.body || '' },
    })
  }

  #sendMediaMessage (data) {
    this.#sendMessage({
      type: constants.TYPES.IMAGE,
      to: data.to.phoneNumber,
      image: data.message.image || {}
    })
  }

  #sendInteractiveMessage (data) {
    this.#sendMessage({
      type: constants.TYPES.INTERACTIVE,
      to: data.to.phoneNumber,
      interactive: data.message.interactive || {}
    })
  }

  #sendLocationMessage (data) {
    this.#sendMessage({
      type: constants.TYPES.LOCATION,
      to: data.to.phoneNumber,
      location: data.message.location || {}
    })
  }

  #sendContactMessage (data) {
    this.#sendMessage({
      type: constants.TYPES.CONTACTS,
      contats: data.message.contacts || []
    })
  }

  #sendMessage (data) {
    try {
      return axios({
        method: 'POST',
        url: `${constants.META_API_ENDPOINT}/${constants.META_API_VERSION}/${data.from.phoneNumberId}/${constants.MESSAGES.ENTRY_POINT}`,
        data: JSON.stringify({
          ...{
            messaging_product: constants.MESSAGING_PRODUCT
          },
          ...data
        }),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this._appToken}`
        },
      })
    } catch (error) {
      console.error(error)
      return null
    }
  }
}

module.exports = WhatsAppCloudApi
