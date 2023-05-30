<template>
	<view class="home">
		<view class="home_top">
			<view class="slider-bg"></view>
			<!-- 首页自定义顶部 -->
			<view class="titleBar" :style="{paddingTop:top+'px',height:height+'px',lineHeight:height+'px'}">
				首页
			</view>
			<!-- 顶部搜索  轮播图-->
			<view class="top_contain" :style="{paddingTop: containTop + 'px'}">
				<view class="search">
					<uni-icons class="bars_icon" type="bars" size="26" color="#ffffff"></uni-icons>
					<van-cell-group class="search_field">
					  <van-field
					    :value="searchForm.value"
					    placeholder="请输入"
					    input-align="left"
						left-icon="search"
						clearable
					  />
					</van-cell-group>
					<van-button class="search_button" size="small" round="true">搜索</van-button>
				</view>
				<view class="home_swiper">
					<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="800">
						<swiper-item v-for="item,i in swiperList" :key="i">
							<view class="swiper-item">
								<img :src="item.src" alt="">
							</view>
						</swiper-item>
					</swiper> 
				</view>
			</view>
		</view>
		<!-- 主体部分 -->
		<view class="main_contain">
			<!-- 商品分类 -->
			<view class="commodity_cate">
				<van-grid column-num="5" :border="false">
				  <van-grid-item class="cateList" use-slot v-for="item,i in cateList" :key="i">
					<image :src="item.src"></image>
					<label>{{item.name}}</label>
				  </van-grid-item>
				</van-grid>
			</view>
			<!-- 商品 -->
			<view class="commodity_info">
				<waterfall></waterfall>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {onMounted, reactive, toRefs} from 'vue';
	import waterfall from '@/components/waterfall.vue';
	let titleBar = reactive({
		top: '',
		height:''
	})
	let contain = reactive({
		containTop: ''
	})
	let data = reactive({
		swiperList:[{
			src:'https://m15.360buyimg.com/mobilecms/jfs/t1/126901/18/32563/86937/6465b8bdF5c412395/1bb5a07d7e2855e3.jpg!cr_1053x420_4_0!q70.jpg'
		},{
			src:'https://m15.360buyimg.com/mobilecms/jfs/t1/145571/1/37530/77571/6467211eF6a5044c3/f8cca61a6afe9b73.jpg!cr_1053x420_4_0!q70.jpg'
		},{
			src:'https://imgcps.jd.com/ling4/10039736937223/5Lqs6YCJ5aW96LSn/5L2g5YC85b6X5oul5pyJ/p-60b4acacfe543e8ec85e6188/22672814/cr_1125x449_0_166/s/q70.jpg'
		},{
			src:'https://m15.360buyimg.com/mobilecms/jfs/t1/141433/20/31242/24411/646b3696F4b143125/fa9c6e9d61118f6a.jpg!cr_1053x420_4_0!q70.jpg'
		}],
		searchForm:{
			value:''
		},
		cateList:[
			{
				src:'https://m15.360buyimg.com/mobilecms/jfs/t1/187640/12/30456/5256/639c2315Ebc95c142/350a8f0c766f5460.png',
				name:'星脉超市'
			},
			{
				src:'https://m15.360buyimg.com/mobilecms/jfs/t1/185733/21/13527/6648/60ec0f31E0fea3e0a/d86d463521140bb6.png',
				name:'充值缴费'
			},
			{
				src:'https://m15.360buyimg.com/mobilecms/jfs/t1/187640/12/30456/5256/639c2315Ebc95c142/350a8f0c766f5460.png',
				name:'星脉超市'
			},
			{
				src:'https://m15.360buyimg.com/mobilecms/jfs/t1/185733/21/13527/6648/60ec0f31E0fea3e0a/d86d463521140bb6.png',
				name:'充值缴费'
			},
			{
				src:'https://m15.360buyimg.com/mobilecms/jfs/t1/185733/21/13527/6648/60ec0f31E0fea3e0a/d86d463521140bb6.png',
				name:'充值缴费'
			},
		],
		
	})
	let {top,height} = toRefs(titleBar);
	let {containTop} = toRefs(contain)
	let {swiperList, searchForm, cateList} = toRefs(data);
	onMounted(()=>{
		getTitleStyle();
	})
	//设置顶部title距离设备顶部的距离
	function getTitleStyle(){
		titleBar.top = wx.getMenuButtonBoundingClientRect().top;//胶囊距离顶部
		titleBar.height = wx.getMenuButtonBoundingClientRect().height;//胶囊高度
		
		containTop.value = titleBar.top + titleBar.height; //主页面距离顶部的距离
		console.log(containTop)
	}
	
</script>

<style lang="less">
@import url("../../static/css/home.less");
</style>
