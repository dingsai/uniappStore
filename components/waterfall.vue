<template>
	<view class="waterfall">
		<view class="waterfall_left">
			<view class="waterfall_list" v-for="(item,index) in goods.goodsLeftList" :key="index">
				<view class="waterfall_list_img">
					<image :src="item.src" mode="widthFix" @load="imageLoad"></image>
				</view>
				<view class="msg-box" ref="msgBox">
					<view class="name single-omit">
						<image class="title_icon" v-if="item.title_icon" :src="item.title_icon"></image>
						{{item.title}}
					</view>
					<view class="coupon" v-if="item.coupon">
						{{item.coupon}}
					</view>
					<view class="price-box flex-align-center">
						<view class="unit">
							<text>￥</text>
							<view class="now_price">{{item.now_price}}</view>
							<image class="price_icon" v-if="item.price_icon" :src="item.price_icon"></image>
							<view v-if="item.originPrice" class="originPrice">￥{{item.originPrice}}</view>
						</view>
						<view class="comment">
							<text>{{item.comment}}条评论</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="waterfall_right"  >
			<view class="waterfall_list" v-for="(item,index) in goodsRightList" :key="index">
				<view class="waterfall_list_img">
					<image :src="item.src" mode="widthFix" @load="imageLoad"></image>
				</view>
				<view class="msg-box" ref="msgBox">
					<view class="name single-omit">
						<image class="title_icon" v-if="item.title_icon" :src="item.title_icon"></image>
						{{item.title}}
					</view>
					<view class="coupon" v-if="item.coupon">
						{{item.coupon}}
					</view>
					<view class="price-box flex-align-center">
						<view class="unit">
							<text>￥</text>
							<view class="now_price">{{item.now_price}}</view>
							<view v-if="item.originPrice" class="originPrice">￥{{item.originPrice}}</view>
						</view>
						<view class="comment">
							<text>{{item.comment}}条评论</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {onMounted, ref, reactive, toRefs, getCurrentInstance, nextTick} from 'vue';
	let {proxy} = getCurrentInstance();
	let goods = reactive({
		//总商品数
		goodList:[{
				src:'https://img14.360buyimg.com/mobilecms/s360x360_jfs/t1/102996/33/20480/119474/61def9fbE4e0bc21e/4d14539030f2c5fa.jpg!q70.dpg.webp',
				title:'锋立一次性医用口罩成人白色口罩独立包装100只防晒防尘隔离病菌成人男女三层防护口罩亲肤透气 50片-独立装白色医用口罩',
				now_price:8.9,
				originPrice: 9.9,
				title_icon:'https://img12.360buyimg.com/img/s88x28_jfs/t1/201732/29/26359/1848/62fb657fE53cd4619/710369802b423cd8.png',
				coupon:'满6减5',
				comment: 19
			},{	
				src:'https://img14.360buyimg.com/mobilecms/s360x360_jfs/t1/151904/28/28286/130039/6363a990Ea6942b21/738f05ebbcba2ba6.jpg!q70.dpg.webp',
				title:'倍思 苹果14ProMax手机壳磁吸充电 iPhone14ProMax保护套高端Magsafe磁吸壳ip14超薄防摔壳男女款 透明',
				now_price:18.9,
				originPrice: 19.9,
				title_icon:'',
				coupon:'',
				comment: 10
			},{	
				src:'https://img14.360buyimg.com/mobilecms/s360x360_jfs/t1/116447/2/24843/77539/6471b662Fa06b597b/ab3caf615a545744.jpg!q70.dpg.webp',
				title:'施耐德开关插座面板86型墙面10A斜五孔插座面板 皓呈系列奶油白色 错位五孔单只',
				now_price:15.72,
				originPrice: 29.9,
				title_icon:'https://img12.360buyimg.com/img/s88x28_jfs/t1/201732/29/26359/1848/62fb657fE53cd4619/710369802b423cd8.png',
				coupon:'满60减5',
				comment: 100
			},{	
				src:'https://img14.360buyimg.com/mobilecms/s360x360_jfs/t1/140468/39/36835/116957/64673e2bF6c439289/14b75c28f88a6088.jpg!q70.dpg.webp',
				title:'奥美医疗 医用外科成人防护口罩 灭菌独立包装三层口罩含熔喷布低阻透气细菌过滤率大于99% 白色50只/盒',
				now_price:25.9,
				originPrice: 19.9,
				title_icon:'',
				coupon:'',
				comment: 15
			}
		],
		goodsLeftList:[],
		goodsRightList:[],
		itemIndex: 0,
		leftHeight: 0,
		rightHeight: 0,
		waterTextH: 0
	})
	let { goodList, goodsLeftList, goodsRightList,itemIndex, leftHeight,rightHeight, waterTextH} = toRefs(goods);
	goodsLeftList.value = [goodList.value[0]];//第一个商品为左侧第一个
	onMounted(()=>{
		 // 获取瀑布流 文字元素的高度
		 const query = uni.createSelectorQuery().in(proxy);
		  query.select('.msg-box').boundingClientRect((rect) => {
		 	waterTextH.value = rect.height;
		 }).exec();
	})
	//计算 瀑布流
	function imageLoad(e){
		if (!e) {
			console.log('无图片！！！！');
			return;
		}
		let imgH = e.detail.height  + waterTextH.value + 20; //图片显示高度加上下面的文字的高度waterTextH.value,加上margin-bottom20rpx
		if (itemIndex.value === 0) {
			leftHeight += imgH; //第一张图片高度加到左边
			itemIndex.value++;
			goodsRightList.value.push(goodList.value[itemIndex.value]); //第二张图片先入栈
		} else {
			itemIndex.value++;
			//再加高度
			if (leftHeight > rightHeight) {
				rightHeight += imgH;
			} else {
				leftHeight += imgH;
			}
			if (itemIndex.value < goodList.value.length) {
				//下一张图片入栈
				if (leftHeight > rightHeight) {
					goodsRightList.value.push(goodList.value[itemIndex.value]);
				} else {
					goodsLeftList.value.push(goodList.value[itemIndex.value]);
				}
			}
		}
	}
</script>

<style>
</style>