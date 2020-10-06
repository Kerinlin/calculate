module.exports = {
  lintOnSave: false,
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        appId: "com.electron.zzcalculate",
        productName: "舟舟专属计算器",
        win: {
          icon: "public/cal.ico"
        },
        nsis: {
          oneClick: false, // 是否一键安装，建议为 false，可以让用户点击下一步、下一步、下一步的形式安装程序，如果为true，当用户双击构建好的程序，自动安装程序并打开，即：一键安装
          allowToChangeInstallationDirectory: true // 允许修改安装目录，建议为 true，是否允许用户改变安装目录，默认是不允许
        }
      }
    }
  }
};
