let app = getApp();
let http = require('../../utils/http.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
       list:{
         coming:{},
         theaters:{},
         top250:{}
       }
  },
  toDetails(e){
    let id= e.currentTarget.dataset.id;
    wx.navigateTo({
      url: "/pages/details/details?id="+id+"",
    })
  },
  toMore(e){
    let title = e.currentTarget.dataset.title;
    wx.navigateTo({
      url: "/pages/more/more?title=" + title + "",
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let global = app.globalData;
    let url = global.url;
    let coming = global.coming;
    let theaters = global.theaters;
    let top250 = global.top250;

    http.requestMove(url + coming +"?start=0&count=10", "coming","影院热映", this.getHttp);
    http.requestMove(url + theaters + "?start=0&count=10", "theaters", "热门", this.getHttp);
    http.requestMove(url + top250 + "?start=0&count=10", "top250", "排行榜", this.getHttp);
  },
  getHttp(res,key,title){
    this.data.list[key]={
      title:title,
      move:res
    }
    this.setData({
      list:this.data.list
    })
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