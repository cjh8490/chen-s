function request(url, callBack) {
  wx.request({
    url: url,
    success(res) {
      callBack(res.data)
    }
  })
}

function requestMove(url, key, title, callBack) {
  wx.request({
    url: url,
    success(res) {
      callBack(res.data, key, title)
    }
  })
}

module.exports = {
  request: request,
  requestMove: requestMove
}