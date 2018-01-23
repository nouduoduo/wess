// var json = require("../../data/Home_data.js")

Page({


  /* 生命周期函数--监听页面加载 */
  onLoad: function (options) {
    var that = this;
    this.setData({
      //main_key: json.homeIndex
    });
    wx.request({
    url: 'http://127.0.0.1:3000/banner/list',
    success:function(res){
      if(res.data.code==404){
        // 错误处理
    
      }else{
        that.setData({
          movies: res.data.data
        })
      }
    }
  });
    wx.request({
      url: 'http://127.0.0.1:3000/inventory',
      success: function (res) {
        if (res.data.code == 404) {
          // 错误处理

        } else {
          console.log(res.data.inventorys);
          that.setData({
            main_key: res.data.inventorys
          })
        }
      }
    })
  },

  // 跳转子页面 详情页面
  btn:function(e){
    var HomeId = e.currentTarget.dataset.id
    console.log(HomeId)
    wx.navigateTo({
      url: '../../pages/home-details/home-details?id=' + HomeId,
    })
  }
  
})