[![Build Status](https://travis-ci.org/AdhityaRamadhanus/curryjs.svg?branch=master)](https://travis-ci.org/AdhityaRamadhanus/curryjs)

<h1>CurryJs</h1>

<p>
  <a href="#installation">Installation</a> |
  <a href="#usage">Usage</a> |
  <a href="#license">License</a>
  <br><br>
  <blockquote>
  Simple, naive, small library for currying function
  composing and curry are two important technique in functional programming, you can build more functions from these
  </blockquote>
</p>

Installation
------------

`npm install curryjs`

Usage
-----

```js
var curryJs = require('curryjs')
var composeJs = require('composejs')
var split = curryJs(function (delim, str) { return str.split(delim)})
var join = curryJs(function (delim, arr) { return arr.join(delim)})
var map = curryJs(function (fn, arr) { return arr.map(fn)})
var toLowerCase = Function.prototype.call.bind(String.prototype.toLowerCase)
var composed = composeJs(join(' '), map(toLowerCase), split(' '))
composed('Hello World') // hello world
```

License
----

MIT © [Adhitya Ramadhanus]
