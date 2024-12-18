# @randplus/color
Generate random colors.<br>
This package is included in '[randplus](https://www.npmjs.com/package/randplus)'.

###### Teams
<a href="https://oto.pet/"><img src="https://raw.githubusercontent.com/randplus/docs/main/img/randplus.png" alt="OTONEKO.CAT" style="display: block; width: auto; height: 100px;"/></a>
<a href="https://oto.pet/"><img src="https://www.otoneko.cat/img/logo.png" alt="OTONEKO.CAT" style="display: block; width: auto; height: 100px;"/></a>
<a href="https://www.otoho.me/"><img src="https://www.otoho.me/img/logo.png" alt="Oto Home" style="display: block; width: auto; height: 100px;"/></a>

## Usage
```js
// Classic
const random = require('@randplus/color');

console.log(random('hex')); // '000000' ~ 'ffffff'
console.log(random('hex', { prefix: '#' })); // '#000000' ~ '#ffffff'
console.log(random('rgb')); // [0, 0, 0] ~ [255, 255, 255]
console.log(random('word')); // 'limegreen'
console.log(random('word', { language: 'ja' })); // '鉄色'
```
```js
// Advanced
const { hex, rgb, word } = require('@randplus/color');

console.log(hex()); // '000000' ~ 'ffffff'
console.log(hex('#')); // '#000000' ~ '#ffffff'
console.log(rgb()); // [0, 0, 0] ~ [255, 255, 255]
console.log(word()); // 'limegreen'
console.log(word('cn')); // '紫磨金'
```

### Get Color Name Example:
Install [color-name-lib](https://www.npmjs.com/package/color-name-lib).
```sh
npm i color-name-lib
```
```js
const { hex } = require('@randplus/color');
const colorName = require('color-name-lib');

const colorHex = hex();
const name = colorName(colorHex);
console.log(`${colorHex}: ${name}`);
```
or use `lib/color-name-lib.js`.
```js
const { hex } = require('@randplus/color');
const colorName = require('@randplus/color/lib/color-name-lib');

const colorHex = hex();
const name = colorName(colorHex);
console.log(`${colorHex}: ${name}`);
```

## Get Support
<a href="https://discord.gg/yKW8wWKCnS"><img src="https://discordapp.com/api/guilds/1005287561582878800/widget.png?style=banner4" alt="Discord Banner"/></a>