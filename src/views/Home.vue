<template>
  <div class="home">
    <h1 class="title">舟亦绾专属计算器</h1>
    <div class="form-container">
      <div class="row">
        <span>
          <input
            class="gate"
            id="class"
            type="text"
            placeholder="请舟舟输入书名"
          />
          <label
            style="font-family:'HappyZcool-2016235ab6040f226c2';"
            for="class"
            >书名</label
          >
        </span>
        <span>
          <input
            class="gate"
            id="class"
            type="text"
            placeholder="请舟舟输入职务"
          />
          <label
            style="font-family:'HappyZcool-2016235ab6040f226c2';"
            for="class"
            >职务</label
          >
        </span>
        <span>
          <input
            v-model="price"
            class="gate"
            id="move"
            type="text"
            placeholder="请舟舟输入单价(元/小时)"
          />
          <label
            style="font-family:'HappyZcool-2016235ab6040f226c2';"
            for="move"
            >单价</label
          >
        </span>
      </div>
      <div class="row">
        <span>
          <input
            v-model="hour"
            class="gate"
            id="class"
            type="text"
            placeholder="请舟舟输入小时"
          />
          <label
            style="font-family:'HappyZcool-2016235ab6040f226c2';"
            for="class"
            >时</label
          >
        </span>
        <span>
          <input
            v-model="minute"
            class="gate"
            id="element"
            type="text"
            placeholder="请舟舟输入分钟"
          />
          <label
            style="font-family:'HappyZcool-2016235ab6040f226c2';"
            for="element"
            >分</label
          >
        </span>
        <span>
          <input
            v-model="sec"
            class="gate"
            id="move"
            type="text"
            placeholder="请舟舟输入秒数"
          />
          <label
            style="font-family:'HappyZcool-2016235ab6040f226c2';"
            for="move"
            >秒</label
          >
        </span>
      </div>
      <div class="row incomeRow">
        <span class="income">收入: {{ income }} 元</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      price: "",
      hour: "",
      minute: "",
      sec: ""
    };
  },
  computed: {
    income() {
      // 每秒多少钱
      let secPrice = this.price / 3600;
      let minPrice = this.price / 60;
      let total =
        this.hour * this.price + this.minute * minPrice + this.sec * secPrice;
      return total.toFixed(2);
    }
  }
};
</script>

<style lang="scss" scoped>
@mixin epic-sides() {
  // https://codepen.io/MichaelArestad/pen/qltuk
  position: relative;
  z-index: 1;

  &:before {
    position: absolute;
    content: "";
    display: block;
    top: 0;
    left: -5000px;
    height: 100%;
    width: 15000px;
    z-index: -1;
    @content;
  }
}
.home {
  .title {
    margin-top: 100px;
    text-align: center;
    color: #efefef;
    font-family: "HappyZcool-2016235ab6040f226c2";
    line-height: 30px;
    font-size: 40px;
    font-weight: 400;
  }
  .form-container {
    width: 60%;
    margin: 0 auto;
    .row {
      // margin: 0 auto;
      @include epic-sides() {
        background: inherit;
      }
      // text-align: center;
      span {
        position: relative;
        display: inline-block;
        margin: 30px 10px;
      }
      .income {
        color: #efefef;
        font-size: 24px;
        font-family: "HappyZcool-2016235ab6040f226c2";
      }
    }
    .incomeRow {
      text-align: center;
    }
    .gate {
      display: inline-block;
      width: 215px;
      padding: 10px 0 10px 15px;
      font-family: "Open Sans", sans;
      font-weight: 400;
      color: #377d6a;
      background: #efefef;
      border: 0;
      border-radius: 3px;
      outline: 0;
      text-indent: 65px; // Arbitrary.
      transition: all 0.3s ease-in-out;

      &::-webkit-input-placeholder {
        color: #efefef;
        text-indent: 0;
        font-weight: 300;
        font-size: 12px;
        letter-spacing: 1px;
        font-family: "HappyZcool-2016235ab6040f226c2";
      }

      + label {
        display: inline-block;
        position: absolute;
        top: 0;
        left: 0;
        padding: 10px 15px;
        color: #fff;
        text-shadow: 0 1px 0 rgba(19, 74, 70, 0.4);
        background: #7ab893;
        transition: all 0.4s ease-in-out;
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
        transform-origin: left bottom;
        z-index: 99;

        &:before,
        &:after {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          border-radius: 3px;
          background: #377d6a;
          transform-origin: left bottom;
          transition: all 0.4s ease-in-out;
          pointer-events: none;
          z-index: -1;
        }
        &:before {
          background: rgba(3, 36, 41, 0.2);
          z-index: -2;
          right: 20%;
        }
      }
    }
    span:nth-child(2) .gate {
      text-indent: 85px;
    }
    span:nth-child(2) .gate:focus,
    span:nth-child(2) .gate:active {
      text-indent: 0;
    }
    .gate:focus,
    .gate:active {
      color: #377d6a;
      text-indent: 0;
      background: #fff;
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;

      &::-webkit-input-placeholder {
        color: #aaa;
      }
      + label {
        transform: rotate(-66deg);
        border-radius: 3px;

        &:before {
          transform: rotate(10deg);
        }
      }
    }
  }
}
</style>
