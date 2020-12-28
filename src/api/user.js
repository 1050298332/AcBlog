import request from "@/utils/request"

export const login = (data)=>{
  return request({
    method:'post',
    url:'/user/doLogin',
    data
  })
}

export const getUserInfo = ()=>{
  return request({
    method:'get',
    url:'/user/doLogin'
  })
}