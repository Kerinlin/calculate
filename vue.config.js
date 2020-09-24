module.exports = {
  lintOnSave: false,
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        appId: "com.cal.calculate",
        productName: "舟舟专属计算器",
        win: {
          icon: "public/cal.ico"
        }
      }
    }
  }
};
