//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  onShow: function () {
    console.log('从后台进入前台');
  },
  globalData: {
    userInfo: null,
    History: [
      { value: ['a->aa'], sced: 0, imgurl: "/images/sc.png", show: 0, recordList: [[110, 1, '12:12:12', '13:13:13'], [229, 2, '12:12:12', '13:13:13']] },
      { value: ['b->bb'], sced: 0, imgurl: "/images/sc.png", show: 0, recordList: [[111, 1, '12:12:12', '13:13:13'], [228, 2, '12:12:12', '13:13:13']] },
      { value: ['c->cc'], sced: 0, imgurl: "/images/sc.png", show: 0, recordList: [[112, 1, '12:12:12', '13:13:13'], [227, 2, '12:12:12', '13:13:13']] },
      { value: ['d->dd'], sced: 0, imgurl: "/images/sc.png", show: 0, recordList: [[113, 1, '12:12:12', '13:13:13'], [226, 2, '12:12:12', '13:13:13']] },
      { value: ['e->ee'], sced: 0, imgurl: "/images/sc.png", show: 0, recordList: [[114, 1, '12:12:12', '13:13:13'], [225, 2, '12:12:12', '13:13:13']] },
      { value: ['f->ff'], sced: 0, imgurl: "/images/sc.png", show: 0, recordList: [[115, 1, '12:12:12', '13:13:13'], [224, 2, '12:12:12', '13:13:13']] },
      {
        value: ['g->gg'], sced: 0, imgurl: "/images/sc.png", show: 0, recordList: [[116, 1, '12:12:12', '13:13:13'], [223, 2, '12:12:12', '13:13:13']]
      },
      { value: 'h->hh', sced: 0, imgurl: "/images/sc.png", show: 0, recordList: [[117, 1, '12:12:12', '13:13:13'], [222, 2, '12:12:12', '13:13:13']] },
      { value: ['i->ii'], sced: 0, imgurl: "/images/sc.png", show: 0, recordList: [[118, 1, '12:12:12', '13:13:13'], [221, 2, '12:12:12', '13:13:13']] },
      { value: ['j->jj'], sced: 0, imgurl: "/images/sc.png", show: 0, recordList: [[119, 1, '12:12:12', '13:13:13'], [220, 2, '12:12:12', '13:13:13']] },
      { value: ['k->kk'], sced: 0, imgurl: "/images/sc.png", show: 0, recordList: [[210, 1, '12:12:12', '13:13:13']] },
      { value: ['l->ll'], sced: 0, imgurl: "/images/sc.png", show: 0, recordList: [[310, 2, '12:12:12', '13:13:13']] },
      { value: ['m->mm'], sced: 0, imgurl: "/images/sc.png", show: 0, recordList: [[410, 1, '12:12:12', '13:13:13']] },
      { value: ['n->nn'], sced: 0, imgurl: "/images/sc.png", show: 0, recordList: [[510, 1, '12:12:12', '13:13:13']] }],
    Collect: []
  }
})