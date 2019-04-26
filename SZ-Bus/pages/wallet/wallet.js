Page({

  /**
   * 页面的初始数据
   */
  data: {

       items: [

        {

          url: '../recharge/recharge',

          image : "../images/充值.png" ,

          text: '充值',

          color: 'color:#63B8FF'

        }, {

          url: '../withdraw/withdraw',

          image: '../images/提现.png',

          text: '提现',

          color: 'color:red'

        }

      ],

      items2: [

        {

          url: '../credit/credit',

          image: '../images/银行卡',

          text: '银行卡',

          color: 'color:#63B8FF'

        }, {

          url: '../details/details',

          image: '../images/交易记录',

          text: '交易记录',

          color: 'color:red'

        }

      ],



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
    
  }
})