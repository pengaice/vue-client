// Vuex最核心的管理对象
import {
  reqAddress,
  reqShops,
  reqFoodCategorys,
  reqUserInfo,
  reqLoginout,
  reqShopInfo,
  reqShopRatings,
  reqShopGoods
} from '../api'
import {
  RECEIVE_SHOPS,
  RECEIVE_CATEGORYS,
  RECEIVE_ADDRESS,
  RECEIVE_USER,
  RESET_USER,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  RECEIVE_GOODS
} from './mutation-types'

export default {
  
  async getAddress ({commit, state}) {
    const {longitude, latitude} = state
    const result = await reqAddress(longitude, latitude)
    if(result.code===0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, {address})
    }
  },
  async getFoodCategorys ({commit}) {
    const result = await reqFoodCategorys()
    if (result.code===0) {
      const categorys = result.data
      commit(RECEIVE_CATEGORYS, {categorys})
    }
  },
  //异步获取商家列表的异步action
  async getShops ({commit, state}) {
    const {longitude, latitude} = state
    const result = await reqShops({longitude, latitude})
    if(result.code===0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, {shops})
    }
  },
  //同步保存用户信息
  saveUser({commit},user){
    commit(RECEIVE_USER, {user})
  },
  // 获取当前用户信息的异步action
  async getUserInfo ({commit}) {
    const result = await reqUserInfo()
    if(result.code===0) {
      const user = result.data
      commit(RECEIVE_USER, {user})
    }
  },
  //退出登录
  async logout ({commit}) {
    const result = await reqLoginout()
    if(result.code===0) {
      commit(RESET_USER)
    }
  },
  //获取商家信息
  async getShopInfo({commit}){
    const result = await reqShopInfo()
    if(result.code===0){
      const info = result.data
      commit(RECEIVE_INFO,{info})
    }
  },
  //获取商家评价
  async getShopRatings({commit}){
    const result = await reqShopRatings()
    if(result.code===0){
      const ratings = result.data
      commit(RECEIVE_RATINGS,{ratings})
    }
  },
  //获取商品列表
  async getShopGoods({commit},cb){
    const result = await reqShopGoods()
    if(result.code===0){
      const goods = result.data
      commit(RECEIVE_GOODS,{goods})
      typeof cb==='function' && cb()
    }
  }
}
