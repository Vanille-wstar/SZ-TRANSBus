Page({

  /**
   * 页面的初始数据
   */
  data: {
    settings: [
      ['提醒设置', '语言设置',],
      ['检查更新', '联系客服', '关于我们']
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },

  //转到对应的具体设置页面
  show_concrete: function (e) {
    //console.log(e);
    var id = e.currentTarget.id;
    var u = '';
    switch (id) {
      case '00':
        u = '../remind/remind';
        break;
      case '01':
        u = '../language/language';
        break;
      case '10':
        u = '../update/update';
        break;
      case '11':
        u = '../feedback/feedback';
        break;
      case '12':
        u = '../about_us/about_us';
        break;
      default:
        console.log('无匹配');
    }
    wx.navigateTo({
      url: u
    })
  }
})