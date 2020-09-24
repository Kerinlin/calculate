export default {
  install(Vue) {
    // 限定输入框只能输入数字,否则不让输入
    Vue.directive("enterNumber", {
      inserted: function(el) {
        el.addEventListener("keypress", function(e) {
          // console.log(e);
          e = e || window.event;
          let charcode =
            typeof e.charCode === "number" ? e.charCode : e.keyCode;
          let re = /\d/;
          if (
            !re.test(String.fromCharCode(charcode)) &&
            charcode > 9 &&
            !e.ctrlKey
          ) {
            if (e.preventDefault) {
              e.preventDefault();
            } else {
              e.returnValue = false;
            }
          }
        });
      }
    });
  }
};
