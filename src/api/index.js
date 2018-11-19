/**
 * Created by asus-z on 2018/11/19.
 */
//包含n个接口请求函数的模块  发请求==>用ajax引入
import ajax from './ajax'
//函数的返回值是promise对象
// [1、根据经纬度获取位置详情](#1根据经纬度获取位置详情)
//解决跨域的时候要求以api开头，手动加上
const BASE = '/api'
//                                                    根据接口文档设置 看例子
export const reqAddress = (longitude,latitude)=> ajax(BASE+`/position/${latitude},${longitude}`)
// [2、获取食品分类列表](#2获取食品分类列表)<br/>
export const reqFoodCategorys = ()=> ajax(BASE+'/index_category')
// [3、根据经纬度获取商铺列表](#3根据经纬度获取商铺列表)<br/>
export const reqShops = ({longitude,latitude})=> ajax(BASE+'/shops',{latitude,longitude})









