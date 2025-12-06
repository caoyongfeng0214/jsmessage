# jsMessage

`jsMessage` A lightweight JavaScript package for sending messages and handling events.

## Installation

```bash
npm install jsmessage
```

## Quick Start

```javascript
import jsMessage from 'jsmessage';

// Send message
jsMessage.send('changedName', { id: 9527, newName: '哈·没内衣' });

// Listen for messages
jsMessage.on('changedName', (data) => {
   console.log(data); // { id: 9527, newName: '哈·没内衣' }
});

// Listen for messages（Stop listening after one message is received）
jsMessage.once('changedName', (data) => {
   console.log(data); // { id: 9527, newName: '哈·没内衣' }
});
```

## License

[Apache License](./LICENSE)