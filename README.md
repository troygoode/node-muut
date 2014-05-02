# `muut`

This npm module allows users of the [muut Developer Edition](https://muut.com/docs/developer.html) product to generate signed URLs for private forums/comments and Single Sign On.

**[Follow me (@troygoode) on Twitter!](https://twitter.com/intent/user?screen_name=troygoode)**

[![NPM](https://nodei.co/npm/muut.png?downloads=true&stars=true)](https://nodei.co/npm/muut/)

[![build status](https://secure.travis-ci.org/troygoode/node-muut.png)](http://travis-ci.org/troygoode/node-muut)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Author](#author)

## Installation (via [npm](https://npmjs.org/package/muut))

```bash
$ npm install muut
```

## Usage

Generate your ticket server-side:

```javascript
var muut = require('muut'),
  secret = 'MY_SECRET',
  user = {
    id: 'johndoe', // required
    displayname: 'John Doe', // required
    email: 'john.doe@gmail.com',
    avatar: '//gravatar.com/avatar/e5fb96fe7ec4ac3d4fa675422f8d1fb9',
    is_admin: true
  };

var muut_ticket = muut(secret, user);
```

*(See [the muut documentation](https://muut.com/docs/developer.html) for more information about the user object being passed in.)*

Now pass that ticket to your templating engine and on into muut's client-side library:

```html
<script>
$("#muut").muut({
   api: {
      key: 'testapikey',
      signature: '<%= muut_ticket.signature %>',
      message: '<%= muut_ticket.message %>',
      timestamp: <%= muut_ticket.timestamp %>
   }
})
</script>
```

## License

[MIT License](http://www.opensource.org/licenses/mit-license.php)

## Author

[Troy Goode](https://github.com/TroyGoode) ([troygoode@gmail.com](mailto:troygoode@gmail.com))

