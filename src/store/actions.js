/**
 * Created by asus-z on 2018/11/19.
 */
//vuex最核心的管理对象
import {
  reqAddress,
  reqFoodCategorys,
  reqShops
} from '../api'

import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS
}from './mutation-types'

export default {
//  异步获取地址信息的异步action
  async getAddress({commit,state}){
    const {longitude,latitude} = state
    const result = await reqAddress(longitude,latitude)
    if(result.code ===0){
      const address = result.data
      commit(RECEIVE_ADDRESS,{address})
    }
  },
//  异步获取食品分类列表的异步action
  async getFoodCategorys({commit}){
    const result = await reqFoodCategorys()
    if(result.code === 0){
      const categorys = result.data
      commit(RECEIVE_CATEGORYS,{categorys})
    }
  },
//  异步获取商家列表的异步action
  async getShops({commit,state}){
    const {longitude,latitude} = state
    const result = await reqShops({longitude,latitude})
    if(result.code ===0){
      const shops = result.data
      commit(RECEIVE_SHOPS,{shops})
    }
  }
}

