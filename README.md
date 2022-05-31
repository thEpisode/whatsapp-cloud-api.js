[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![GitHub license](https://img.shields.io/github/license/thepisode/whatsapp-cloud-api.js.svg)](https://github.com/thEpisode/whatsapp-cloud-api.js/blob/main/LICENSE) 
[![npm](https://img.shields.io/npm/v/npm.svg)](https://www.npmjs.com/package/whatsapp-cloud-api.js)

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

# whatsapp-cloud-api.js

This is a full implementation of official WhatsApp Cloud API

## Installation

The module is now available on npm! `npm i whatsapp-web.js`

## Example usage

```js
const { WhatsAppCloudApi } = require('whatsapp-web.js');

const wAPI = new WhatsAppCloudApi({
  appToken: 'xxxxxx'
});

wAPI.sendMessage({
  to: {
    phoneNumber: '+1xxxxx'
  },
  from: {
    phoneNumber: '+1xxxxx'
  },
  message:{
    body: 'Hello World'
  }
})
```


## Supported features

| Feature  | Status |
| ------------- | ------------- |
| Send text messages    | ✅  |

Something missing? Make an issue and let us know!

## Contributing

Pull requests are welcome! If you want something you'd like to add, please do. For drastic changes, please open an issue first.

## Disclaimer

This project is not affiliated, associated, authorized, endorsed by, or in any way officially connected with WhatsApp or any of its subsidiaries or its affiliates. The official WhatsApp website can be found at https://whatsapp.com. "WhatsApp" as well as related names, marks, emblems and images are registered trademarks of their respective owners.

