import {getLatestTopics} from '../../utils/api.js';

// pages/latest/latest.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    title: "最新话题",
    latest: [],
    hidden: false,
  },

  fetchData(callback) {
    var that = this;
    that.setData({
      hidden: false
    })
    wx.request({
      url: getLatestTopics({page: 1}),
      success(res) {
        console.log(res);

        that.setData({
          latest: res.data
        })
        setTimeout(() => {
          that.setData({hidden: true});
          callback();
        }, 300)
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.fetchData(() => console.log());
  },

  gotoDetail(event) {
    wx.navigateTo({
      url: '../detail/detail?id=' + event.currentTarget.id,
    })
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.fetchData(() => wx.stopPullDownRefresh());
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