# Zero-Matter
Zero Matter is a simple library for adding effect to elements when scrolling the page.
No Jquery. Just 998b minified.

> The Zero Matter is a fictional concept in the Marvel Comics Universe. Zero Matter, is a form of unstable and powerful cosmic radiation made of pure negative energy.

# Install
You can get it on npm.
```
$ npm install zero-matter --save
```
Or bower.
```
$ bower install zero-matter --save
```
If you're not into package management, just [download a ZIP file](https://github.com/emanuelpessoaa/zero-matter/archive/master.zip).


# Usage

First, include the script located on the DIST folder.
```html
<script> src="dist/zeromatter.min.js"></script>
```

Now, you need to instantiate it by passing a DOM selector.
```javascript
var darkforce = new ZeroMatter('.className');
```
And put these lines on your css file
```css
.zmfadeOut {
  opacity: 0;
  -webkit-opacity: 0;
  -moz-opacity: 0;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
.zmfadeIn {
  opacity: 1;
  -webkit-opacity: 1;
  -moz-opacity: 1;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
```

# ToDo
* Add option to margin to run effect;
* Add option to accept array;
* Add more effect options like magnet, saturation and more;

# Issues

* Read this before [Issue Template](https://github.com/emanuelpessoaa/zero-matter/blob/master/.github/issue_template.md)

# Pull Requests

* Read this before [How Write The Perfect Pull Request](https://github.com/blog/1943-how-to-write-the-perfect-pull-request)