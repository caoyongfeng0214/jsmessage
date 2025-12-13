# js-msgX

`js-msgX` A lightweight JavaScript package for sending messages and handling events.

## Installation

```bash
npm install js-msgx
```

## Quick Start

```javascript
import msgX from 'js-msgx';

// Send message
msgX.send('changedName', { id: 9527, newName: '哈·没内衣' });

// Listen for messages
msgX.on('changedName', (data) => {
   console.log(data); // { id: 9527, newName: '哈·没内衣' }
});

// Listen for messages（Stop listening after one message is received）
msgX.once('changedName', (data) => {
   console.log(data); // { id: 9527, newName: '哈·没内衣' }
});
```

## License

[Apache License](./LICENSE)