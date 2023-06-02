"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  __name: "waterfall",
  setup(__props) {
    let { proxy } = common_vendor.getCurrentInstance();
    let goods = common_vendor.reactive({
      //总商品数
      goodList: [
        {
          src: "https://img14.360buyimg.com/mobilecms/s360x360_jfs/t1/102996/33/20480/119474/61def9fbE4e0bc21e/4d14539030f2c5fa.jpg!q70.dpg.webp",
          title: "锋立一次性医用口罩成人白色口罩独立包装100只防晒防尘隔离病菌成人男女三层防护口罩亲肤透气 50片-独立装白色医用口罩",
          now_price: 8.9,
          originPrice: 9.9,
          title_icon: "https://img12.360buyimg.com/img/s88x28_jfs/t1/201732/29/26359/1848/62fb657fE53cd4619/710369802b423cd8.png",
          coupon: "满6减5",
          comment: 19
        },
        {
          src: "https://img14.360buyimg.com/mobilecms/s360x360_jfs/t1/151904/28/28286/130039/6363a990Ea6942b21/738f05ebbcba2ba6.jpg!q70.dpg.webp",
          title: "倍思 苹果14ProMax手机壳磁吸充电 iPhone14ProMax保护套高端Magsafe磁吸壳ip14超薄防摔壳男女款 透明",
          now_price: 18.9,
          originPrice: 19.9,
          title_icon: "",
          coupon: "",
          comment: 10
        },
        {
          src: "https://img14.360buyimg.com/mobilecms/s360x360_jfs/t1/116447/2/24843/77539/6471b662Fa06b597b/ab3caf615a545744.jpg!q70.dpg.webp",
          title: "施耐德开关插座面板86型墙面10A斜五孔插座面板 皓呈系列奶油白色 错位五孔单只",
          now_price: 15.72,
          originPrice: 29.9,
          title_icon: "https://img12.360buyimg.com/img/s88x28_jfs/t1/201732/29/26359/1848/62fb657fE53cd4619/710369802b423cd8.png",
          coupon: "满60减5",
          comment: 100
        },
        {
          src: "https://img14.360buyimg.com/mobilecms/s360x360_jfs/t1/140468/39/36835/116957/64673e2bF6c439289/14b75c28f88a6088.jpg!q70.dpg.webp",
          title: "奥美医疗 医用外科成人防护口罩 灭菌独立包装三层口罩含熔喷布低阻透气细菌过滤率大于99% 白色50只/盒",
          now_price: 25.9,
          originPrice: 19.9,
          title_icon: "",
          coupon: "",
          comment: 15
        },
        {
          src: "https://img14.360buyimg.com/mobilecms/s360x360_jfs/t1/116447/2/24843/77539/6471b662Fa06b597b/ab3caf615a545744.jpg!q70.dpg.webp",
          title: "施耐德开关插座面板86型墙面10A斜五孔插座面板 皓呈系列奶油白色 错位五孔单只",
          now_price: 15.72,
          originPrice: 29.9,
          title_icon: "https://img12.360buyimg.com/img/s88x28_jfs/t1/201732/29/26359/1848/62fb657fE53cd4619/710369802b423cd8.png",
          coupon: "满60减5",
          comment: 100
        }
      ],
      goodsLeftList: [],
      goodsRightList: [],
      itemIndex: 0,
      leftHeight: 0,
      rightHeight: 0,
      waterTextH: 0
    });
    let { goodList, goodsLeftList, goodsRightList, itemIndex, leftHeight, rightHeight, waterTextH } = common_vendor.toRefs(goods);
    goodsLeftList.value = [goodList.value[0]];
    common_vendor.onMounted(() => {
      const query = common_vendor.index.createSelectorQuery().in(proxy);
      query.select(".msg-box").boundingClientRect((rect) => {
        waterTextH.value = rect.height;
      }).exec();
    });
    function imageLoad(e) {
      if (!e) {
        console.log("无图片！！！！");
        return;
      }
      let imgH = e.detail.height + waterTextH.value + 20;
      if (itemIndex.value === 0) {
        leftHeight += imgH;
        itemIndex.value++;
        goodsRightList.value.push(goodList.value[itemIndex.value]);
      } else {
        itemIndex.value++;
        if (leftHeight > rightHeight) {
          rightHeight += imgH;
        } else {
          leftHeight += imgH;
        }
        if (itemIndex.value < goodList.value.length) {
          if (leftHeight > rightHeight) {
            goodsRightList.value.push(goodList.value[itemIndex.value]);
          } else {
            goodsLeftList.value.push(goodList.value[itemIndex.value]);
          }
        }
      }
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(goods).goodsLeftList, (item, index, i0) => {
          return common_vendor.e({
            a: item.src,
            b: item.title_icon
          }, item.title_icon ? {
            c: item.title_icon
          } : {}, {
            d: common_vendor.t(item.title),
            e: item.coupon
          }, item.coupon ? {
            f: common_vendor.t(item.coupon)
          } : {}, {
            g: common_vendor.t(item.now_price),
            h: item.price_icon
          }, item.price_icon ? {
            i: item.price_icon
          } : {}, {
            j: item.originPrice
          }, item.originPrice ? {
            k: common_vendor.t(item.originPrice)
          } : {}, {
            l: common_vendor.t(item.comment),
            m: index
          });
        }),
        b: common_vendor.o(imageLoad),
        c: common_vendor.f(common_vendor.unref(goodsRightList), (item, index, i0) => {
          return common_vendor.e({
            a: item.src,
            b: item.title_icon
          }, item.title_icon ? {
            c: item.title_icon
          } : {}, {
            d: common_vendor.t(item.title),
            e: item.coupon
          }, item.coupon ? {
            f: common_vendor.t(item.coupon)
          } : {}, {
            g: common_vendor.t(item.now_price),
            h: item.originPrice
          }, item.originPrice ? {
            i: common_vendor.t(item.originPrice)
          } : {}, {
            j: common_vendor.t(item.comment),
            k: index
          });
        }),
        d: common_vendor.o(imageLoad)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/dingsai/Documents/丁赛/uniapp/uniStore/components/waterfall.vue"]]);
my.createComponent(Component);
