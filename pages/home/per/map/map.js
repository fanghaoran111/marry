
//引用腾讯地图API
var QQMapWX = require('../../../libs/qqmap-wx-jssdk.min.js');
var qqmapsdk;

Page({
  data: {
    latitude: 0,//地图初次加载时的纬度坐标
    longitude: 0, //地图初次加载时的经度坐标
    name: "" //选择的位置名称
  },
  onLoad: function () {
    // 实例化API核心类
    qqmapsdk = new QQMapWX({
      key: 'TZPBZ-W2T3X-EJ34E-7DQPM-W5A52-JCFBN'
    });

    this.moveToLocation();
  },
  //移动选点
  moveToLocation: function () {
    var that = this;
    wx.chooseLocation({
      success: function (res) {
        console.log(res.name);
        //选择地点之后返回到原来页面
        wx.navigateTo({
          url: "/pages/home/per/per?address=" + res.name
        });
      },
      fail: function (err) {
        console.log(err)
      }
    });
  }
});