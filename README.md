# jazzon-url

> Plugin for jazzon to rewrite urls

## Usage

The plugin requires option `prefix`.

```javascript
let jazzon = require('jazzon');
let url = require('jazzon-url');
let json = { foo: '@{ url(foo.json) }' };

jazzon
  .use(url({ prefix: '/path' }))
  .compile(json)
  .then((result) => {
    console.log(result); // => "/path/foo.json"
  });
```
