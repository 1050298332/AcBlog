import axios from "axios"
// import {Message} from 'element-ui'

const service = axios.create({
  // url默认地址
  baseURL:'http://127.0.0.1:80',
  headers:{
    // 获取你token的方法
    Authorization:window.localStorage.getItem("token")
  },
  transformResponse: [function (data) {
    // axios 默认在内部使用 JSON.parse 来转换处理原始数据
    // 后端返回数据可能不是就送格式字符串
    // 如果不是那 JSONBig.parse 这个方法的调用就会报错
    try {
      // 如果转换成功，则直接返回结果
      return JSON.parse(data)
    } catch (error) {
      // 如果转换失败，则进入这里
      // 在这里把数据原封不动的直接返回给请求使用
      return data
    }
  }]
})


service.interceptors.request.use(
  config => {
    let token = window.sessionStorage.getItem('token')
    if (token != null || token != "") {
      config.headers.Authorization = token
    } else {
      this.$router.push('login')
    }
    return config
  },
  error => {
    return error
  }
)

service.interceptors.response.use(
  response => response,
  error => {
    console.log('err' + error)
    // Message({
    //   message: error.message,
    //   type: 'error',
    //   duration: 5 * 1000
    // })
    return Promise.reject(error)
  }
)

export default service
