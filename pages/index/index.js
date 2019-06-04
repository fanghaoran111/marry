//index.js
// 背景音乐外部接口
var musicUrl = 'http://www.ytmp3.cn/down/34436.mp3'
// const db = wx.cloud.database();
Page({
  data: {
    autoplay: true,
    interval: 2600,
    duration: 1200,
    isPlayingMusic: true,
    music_url: musicUrl,
   items:[{
     id:'1',
     title:'卡通森林',
     url:'https://fanghaoran.xyz/moban/marry1/',
     img:'https://fanghaoran.xyz/images/moban/1.jpg',
     imgs:'https://fanghaoran.xyz/images/moban/yan.png'
   },{
       id: '2',
       title: '高端简约',
       url: 'https://fanghaoran.xyz/moban/marry2/',
       img: 'https://fanghaoran.xyz/images/moban/2.jpg',
       imgs: 'https://fanghaoran.xyz/images/moban/yan.png'
   }, {
       id: '3',
       title: '粉色轻奢',
       url: 'https://fanghaoran.xyz/moban/',
       img: 'https://fanghaoran.xyz/images/moban/3.jpg',
       imgs: 'https://fanghaoran.xyz/images/moban/yan.png'
     }, {
       id: '4',
       title: '清新森林',
       url: 'https://fanghaoran.xyz/moban/marry3/',
       img: 'https://fanghaoran.xyz/images/moban/4.jpg',
       imgs: 'https://fanghaoran.xyz/images/moban/yan.png'
     }, {
       id: '5',
       title: '浪漫韩式',
       url: '',
       img: 'https://fanghaoran.xyz/images/moban/5.jpg',
       imgs: 'https://fanghaoran.xyz/images/moban/yan.png'
     }, {
       id: '6',
       title: '粉蓝清新',
       url: '',
       img: 'https://fanghaoran.xyz/images/moban/6.jpg',
       imgs: 'https://fanghaoran.xyz/images/moban/yan.png'
     }
   ],
    array:[{
      id: '1',
     title:'生日快乐',
      url: '',
     img:'https://fanghaoran.xyz/images/moban/7.jpg',
     imgs:'https://fanghaoran.xyz/images/moban/yan.png'
   },{
        id: '2',
       title: '动漫卡通',
        url: '',
       img: 'https://fanghaoran.xyz/images/moban/8.jpg',
       imgs: 'https://fanghaoran.xyz/images/moban/yan.png'
   }, {
        id: '3',
       title: '手绘风格',
        url: '',
       img: 'https://fanghaoran.xyz/images/moban/9.jpg',
       imgs: 'https://fanghaoran.xyz/images/moban/yan.png'
     }, {
        id: '4',
       title: '卡通人物',
        url: '',
       img: 'https://fanghaoran.xyz/images/moban/10.jpg',
       imgs: 'https://fanghaoran.xyz/images/moban/yan.png'
     }, {
        id: '5',
       title: '生日祝福',
        url: '',
       img: 'https://fanghaoran.xyz/images/moban/11.jpg',
       imgs: 'https://fanghaoran.xyz/images/moban/yan.png'
     }, {
        id: '6',
       title: '生日聚会',
        url: '',
       img: 'https://fanghaoran.xyz/images/moban/12.jpg',
       imgs: 'https://fanghaoran.xyz/images/moban/yan.png'
     }
   ],
    list:[{
      id: '1',
     title:'毕业季',
      url: '',
     img:'https://fanghaoran.xyz/images/moban/13.jpg',
     imgs:'https://fanghaoran.xyz/images/moban/yan.png'
   },{
        id: '2',
       title: '毕业了',
        url: '',
       img: 'https://fanghaoran.xyz/images/moban/14.jpg',
       imgs: 'https://fanghaoran.xyz/images/moban/yan.png'
   }, {
        id: '3',
       title: '同学会',
        url: '',
       img: 'https://fanghaoran.xyz/images/moban/15.jpg',
       imgs: 'https://fanghaoran.xyz/images/moban/yan.png'
     }, {
        id: '4',
       title: '毕业季',
        url: '',
       img: 'https://fanghaoran.xyz/images/moban/16.jpg',
       imgs: 'https://fanghaoran.xyz/images/moban/yan.png'
     }, {
        id: '5',
       title: '毕业季',
        url: '',
       img: 'https://fanghaoran.xyz/images/moban/17.jpg',
       imgs: 'https://fanghaoran.xyz/images/moban/yan.png'
     }, {
        id: '6',
       title: '同学聚会',
        url: '',
       img: 'https://fanghaoran.xyz/images/moban/18.jpg',
       imgs: 'https://fanghaoran.xyz/images/moban/yan.png'
     }
   ]

  },
  //事件处理函数
  bindViewTap: function() {
  
  },
  onLoad: function (data) {
    var that = this
    wx.playBackgroundAudio({
      dataUrl: musicUrl,
      title: '',
      coverImgUrl: ''
    })
      // that.saveUser(),
      // that.downLoadHomeImgs()
  },
  // 播放方法
  play: function (event) {
    if (this.data.isPlayingMusic) {
      wx.pauseBackgroundAudio();
      this.setData({
        isPlayingMusic: false
      })
    } else {
      // console.log('this.data.music_url', this.data.music_url)
      wx.playBackgroundAudio({
        dataUrl: this.data.music_url,
        title: '',
        coverImgUrl: ''
      })
      this.setData({
        isPlayingMusic: true
      })
    }
  },
  //点击事件
  onDetailTap: function (e) {
    var that = this
    // console.log(e)//打印数据
    console.log(e.currentTarget.dataset.id)//打印数据
    var id = e.currentTarget.dataset.id
    console.log(that.data.list)
    wx.navigateTo({
      url: '/pages/moban/moban?url=' + that.data.items[id].url,//传url参数到跳转新页面
    })
  },
  capTach: function (e) {
    var that = this
    // console.log(e)//打印数据
    console.log(e.currentTarget.dataset.id)//打印数据
    var id = e.currentTarget.dataset.id
    console.log(that.data.list)
    wx.navigateTo({
      url: '/pages/moban/moban?url=' + that.data.array[id].url,//传url参数到跳转新页面
    })
  },
  listCatch: function (e) {
    var that = this
    // console.log(e)//打印数据
    console.log(e.currentTarget.dataset.id)//打印数据
    var id = e.currentTarget.dataset.id
    console.log(that.data.list)
    wx.navigateTo({
      url: '/pages/moban/moban?url=' + that.data.list[id].url,//传url参数到跳转新页面
    })
  },
})
