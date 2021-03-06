'use strict'
const config = require('./../config')
const store = require('./../store')

const getRecBooks = (event) => {
  return $.ajax({
    url: config.apiUrl + '/recommendations',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getaBook = (id) => {
  return $.ajax({
    url: config.apiUrl + '/recommendations/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  getRecBooks,
  getaBook
}
