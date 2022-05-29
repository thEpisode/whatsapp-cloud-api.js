'use strict';

class WhatsApp {
  constructor (params) {
    this._verifyToken = params.verifyToken;
    this._appToken = params.appToken
  }

  /* This function will return the square of the number that the constructor of this class receives.*/
  sendMessage (data) {
    return this.#send(data)
  }

  #send (data) {
    return axios({
      method: 'POST', // Required, HTTP method, a string, e.g. POST, GET
      url:
        'https://graph.facebook.com/v12.0/' +
        data.phone_number_id +
        '/messages?access_token=' +
        data.token,
      data: {
        messaging_product: 'whatsapp',
        to: data.from,
        text: { body: data.message.body },
      },
      headers: { 'Content-Type': 'application/json' },
    })
  }
}

module.exports = WhatsApp;