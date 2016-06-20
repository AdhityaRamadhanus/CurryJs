'use strict'
var assert = require('chai').assert
var describe = require('mocha').describe
var it = require('mocha').it
var curryJs = require('../')
var composeJs = require('composejs')

describe('curry function', function () {
  it('currying 3-arity function', function (done) {
    var addTri = curryJs(function (a,b,c){ return a+b+c})
    assert.equal(addTri.length, 1)
    assert.equal(addTri(3).length, 1)
    assert.equal(addTri(3)(4).length, 1)
    assert.equal(addTri(3)(4)(5), 12)
  	done()
  })
  it('composing curried function', function (done) {
    var split = curryJs(function (delim, str) { return str.split(delim)})
    var join = curryJs(function (delim, arr) { return arr.join(delim)})
    var map = curryJs(function (fn, arr) { return arr.map(fn)})
    var toLowerCase = Function.prototype.call.bind(String.prototype.toLowerCase)
    var composed = composeJs(join(' '), map(toLowerCase), split(' '))
    assert.equal(composed('Hello World'),'hello world')
    done()
  })
  it('no function provided', function (done) {
    assert.throws(curryJs, Error, 'Function not provided')
  	done()
  })
  it('no argument provided to the function', function (done) {
    var addTri = curryJs(function (a,b,c){ return a+b+c})
    assert.throws(addTri, Error, 'No Arguments')
  	done()
  })
})
