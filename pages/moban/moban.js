// pages/moban/moban.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
    var that = this
    console.log(options)//打印数据
    // 获取传过来的数据
    that.setData({
      url: options.url,//options为页面路由过程中传递的pic参数
    })
    options.url ? this.setData({ url: decodeURIComponent(options.url) }) : this.setData({ url: options.url });
  },
// 分享调用
  onShareAppMessage: function (options) {
    return {
      title: '',
      desc: '',
      path: '/pages/index/index?url=' + encodeURIComponent(options.webViewUrl),
    }
    success:(res) => {
      this.setData({
        url:options.webViewUrl
      })
    }
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