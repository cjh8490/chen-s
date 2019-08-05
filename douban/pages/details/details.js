let app = getApp();
let http = require('../../utils/http.js')
// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '',//影片名称
    large: "",//图片
    genres: [],//剧情
    countries: [],//中国大陆
    year: "",//上映时间
    rating: "",//分数
    summary: "",//简介
    casts: [],//影人
    item: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let global = app.globalData;
    let url = global.url;
    let subject= global.subject;
    let id =options.id;
    wx.showLoading({
      title: '加载中',
    })
    http.request(url + subject + id, this.getDetails);
  },
  getDetails(res){
    let That = this;
    That.setData({
      title:res.title,
      large: res.images.large,//图片
      genres: res.genres,//剧情
      countries: res.countries,//中国大陆
      year: res.year,//上映时间
      rating: res.rating,//分数
      summary: res.summary,//简介
      casts: res.casts,//影人
      item: res
    })
    wx.setNavigationBarTitle({
      title: this.data.title
    })

    setTimeout(function () {
      wx.hideLoading()
    }, 1000)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})