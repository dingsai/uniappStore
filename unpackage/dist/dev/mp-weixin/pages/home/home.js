"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _component_van_field = common_vendor.resolveComponent("van-field");
  const _component_van_cell_group = common_vendor.resolveComponent("van-cell-group");
  const _component_van_button = common_vendor.resolveComponent("van-button");
  const _component_van_grid_item = common_vendor.resolveComponent("van-grid-item");
  const _component_van_grid = common_vendor.resolveComponent("van-grid");
  (_easycom_uni_icons2 + _component_van_field + _component_van_cell_group + _component_van_button + _component_van_grid_item + _component_van_grid)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (_easycom_uni_icons + waterfall)();
}
const waterfall = () => "../../components/waterfall.js";
const _sfc_main = {
  __name: "home",
  setup(__props) {
    let titleBar = common_vendor.reactive({
      top: "",
      height: ""
    });
    let contain = common_vendor.reactive({
      containTop: ""
    });
    let data = common_vendor.reactive({
      swiperList: [{
        src: "https://m15.360buyimg.com/mobilecms/jfs/t1/126901/18/32563/86937/6465b8bdF5c412395/1bb5a07d7e2855e3.jpg!cr_1053x420_4_0!q70.jpg"
      }, {
        src: "https://m15.360buyimg.com/mobilecms/jfs/t1/145571/1/37530/77571/6467211eF6a5044c3/f8cca61a6afe9b73.jpg!cr_1053x420_4_0!q70.jpg"
      }, {
        src: "https://imgcps.jd.com/ling4/10039736937223/5Lqs6YCJ5aW96LSn/5L2g5YC85b6X5oul5pyJ/p-60b4acacfe543e8ec85e6188/22672814/cr_1125x449_0_166/s/q70.jpg"
      }, {
        src: "https://m15.360buyimg.com/mobilecms/jfs/t1/141433/20/31242/24411/646b3696F4b143125/fa9c6e9d61118f6a.jpg!cr_1053x420_4_0!q70.jpg"
      }],
      searchForm: {
        value: ""
      },
      cateList: [
        {
          src: "https://m15.360buyimg.com/mobilecms/jfs/t1/187640/12/30456/5256/639c2315Ebc95c142/350a8f0c766f5460.png",
          name: "星脉超市"
        },
        {
          src: "https://m15.360buyimg.com/mobilecms/jfs/t1/185733/21/13527/6648/60ec0f31E0fea3e0a/d86d463521140bb6.png",
          name: "充值缴费"
        },
        {
          src: "https://m15.360buyimg.com/mobilecms/jfs/t1/187640/12/30456/5256/639c2315Ebc95c142/350a8f0c766f5460.png",
          name: "星脉超市"
        },
        {
          src: "https://m15.360buyimg.com/mobilecms/jfs/t1/185733/21/13527/6648/60ec0f31E0fea3e0a/d86d463521140bb6.png",
          name: "充值缴费"
        },
        {
          src: "https://m15.360buyimg.com/mobilecms/jfs/t1/185733/21/13527/6648/60ec0f31E0fea3e0a/d86d463521140bb6.png",
          name: "充值缴费"
        }
      ]
    });
    let { top, height } = common_vendor.toRefs(titleBar);
    let { containTop } = common_vendor.toRefs(contain);
    let { swiperList, searchForm, cateList } = common_vendor.toRefs(data);
    common_vendor.onMounted(() => {
      getTitleStyle();
    });
    function getTitleStyle() {
      titleBar.top = common_vendor.wx$1.getMenuButtonBoundingClientRect().top;
      titleBar.height = common_vendor.wx$1.getMenuButtonBoundingClientRect().height;
      containTop.value = titleBar.top + titleBar.height;
      console.log(containTop);
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(top) + "px",
        b: common_vendor.unref(height) + "px",
        c: common_vendor.unref(height) + "px",
        d: common_vendor.p({
          type: "bars",
          size: "26",
          color: "#ffffff"
        }),
        e: common_vendor.p({
          value: common_vendor.unref(searchForm).value,
          placeholder: "请输入",
          inputAlign: "left",
          leftIcon: "search",
          clearable: true
        }),
        f: common_vendor.p({
          size: "small",
          round: "true"
        }),
        g: common_vendor.f(common_vendor.unref(swiperList), (item, i, i0) => {
          return {
            a: item.src,
            b: i
          };
        }),
        h: common_vendor.unref(containTop) + "px",
        i: common_vendor.f(common_vendor.unref(cateList), (item, i, i0) => {
          return {
            a: item.src,
            b: common_vendor.t(item.name),
            c: i,
            d: "83a43520-5-" + i0 + ",83a43520-4"
          };
        }),
        j: common_vendor.p({
          useSlot: true
        }),
        k: common_vendor.p({
          columnNum: "5",
          border: false
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/dingsai/Documents/丁赛/uniapp/uniStore/pages/home/home.vue"]]);
wx.createPage(MiniProgramPage);
