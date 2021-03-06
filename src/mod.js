/** 导入模块，自动加载模块中的页面pages和全局组件components */
import mod from '@mkh-mod-doc'
import VCharts from 'vue-echarts'
import * as echarts from 'echarts'

/** 模块注册回调函数，当vue根实例挂载前调用 */
mod.callback = ({ app }) => {
  /* 注册vue-echarts组件 */
  /* 说明文档 https://github.com/ecomfe/vue-echarts/blob/main/README.zh-Hans.md */
  app.component('VChart', VCharts)

  //绑定到全局变量
  app.config.globalProperties.$echarts = echarts

  const { login, getVerifyCode, getProfile } = mkh.api.doc.authorize

  /** 设置登录方法 */
  mkh.config.actions.login = login
  /** 设置获取验证码方法 */
  mkh.config.actions.getVerifyCode = getVerifyCode
  /** 设置获取账户信息方法 */
  mkh.config.actions.getProfile = getProfile
}
