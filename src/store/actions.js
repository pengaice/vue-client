// Vuex最核心的管理对象
import {
  reqAddress,
  reqShops,
  reqFoodCategorys
} from '../api'
import {
  RECEIVE_SHOPS,
  RECEIVE_CATEGORYS,
  RECEIVE_ADDRESS
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
  async getShops ({commit, state}) {
    const {longitude, latitude} = state
    const result = await reqShops({longitude, latitude})
    if(result.code===0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, {shops})
    }
  }
}
