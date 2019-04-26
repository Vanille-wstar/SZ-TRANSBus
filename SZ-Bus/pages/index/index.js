//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  },
    onLoad() {

    },
    onShow() {

    },

    tap(e) {

    },
   

    //事件处理函数
    bindViewTap: function() {
      wx.navigateTo({
        url: '../logs/logs'
      })
    },
    
    getUserInfo: function(e) {
      console.log(e)
      app.globalData.userInfo = e.detail.userInfo
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      })
    },
    jumpPage1: function() {
      wx.navigateTo({
        url: '../../pay/index',
      })
    },

    suo: function(e) {
      wx.navigateTo({
        url: '../pay/index',
      })
    },
    
     jumpPage: function() {
    wx.navigateTo({
      url: '../search/search',
    })
  },
  jumpPageTo1: function() {
    wx.navigateTo({
      url: '../pay/index',
    })
  },
  jumpPageTo2: function () {
    wx.navigateTo({
      url: '../reserve/reserve',
    })
  }
})