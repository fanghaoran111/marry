// pages/template/template.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: [{
      title: '手绘风格',
      img: '../images/moban/9.jpg',
      url:'https://fanghaoran.xyz/moban/',
      imgs: '../images/moban/yan.png'
    }, {
        title: '毕业季',
      img: '../images/moban/13.jpg',
        url:'https://fanghaoran.xyz/moban/marry1',
      imgs: '../images/moban/yan.png'
    }, {
      title: '粉色轻奢',
      img: '../images/moban/3.jpg',
        url: 'https://fanghaoran.xyz/moban/marry2',
      imgs: '../images/moban/yan.png'
    }, {
        title: '生日祝福',
      img: '../images/moban/11.jpg',
        url: 'https://fanghaoran.xyz/moban/marry3',
      imgs: '../images/moban/yan.png'
    }, {
      title: '浪漫韩式',
      img: '../images/moban/5.jpg',
        url: '',
      imgs: '../images/moban/yan.png'
    }, {
        title: '同学聚会',
      img: '../images/moban/18.jpg',
        url: '',
      imgs: '../images/moban/yan.png'
      }, {
        title: '生日快乐',
        img: '../images/moban/7.jpg',
        url: '',
        imgs: '../images/moban/yan.png'
      }, {
        title: '动漫卡通',
        img: '../images/moban/8.jpg',
        url: '',
        imgs: '../images/moban/yan.png'
      }, {
        title: '卡通森林',
        img: '../images/moban/1.jpg',
        url: '',
        imgs: '../images/moban/yan.png'
      }, {
        title: '卡通人物',
        img: '../images/moban/10.jpg',
        url: '',
        imgs: '../images/moban/yan.png'
      }, {
        title: '清新森林',
        img: '../images/moban/4.jpg',
        url: '',
        imgs: '../images/moban/yan.png'
      }, {
        title: '生日聚会',
        img: '../images/moban/12.jpg',
        url: '',
        imgs: '../images/moban/yan.png'
      }, {
        title: '高端简约',
        img: '../images/moban/2.jpg',
        url: '',
        imgs: '../images/moban/yan.png'
      }, {
        title: '毕业了',
        img: '../images/moban/14.jpg',
        url: '',
        imgs: '../images/moban/yan.png'
      }, {
        title: '同学会',
        img: '../images/moban/15.jpg',
        url: '',
        imgs: '../images/moban/yan.png'
      }, {
        title: '毕业季',
        img: '../images/moban/16.jpg',
        url: '',
        imgs: '../images/moban/yan.png'
      }, {
        title: '毕业季',
        img: '../images/moban/17.jpg',
        url: '',
        imgs: '../images/moban/yan.png'
      }, {
        title: '粉蓝清新',
        img: '../images/moban/6.jpg',
        url: '',
        imgs: '../images/moban/yan.png'
      }
    ]
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  listCatch: function (e) {
    var that = this
    // console.log(e)//打印数据
    console.log(e.currentTarget.dataset.id)//打印数据
    var id = e.currentTarget.dataset.id
    console.log(that.data.list)
    wx.navigateTo({
      url: '/pages/moban/moban?url=' + that.data.array[id].url,//传url参数到跳转新页面
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
  // 顶部标题
  onShow: function () {
    wx.setNavigationBarTitle({
      title:"模板展示"
    })
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