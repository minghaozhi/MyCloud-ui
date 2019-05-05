import request from '@/utils/request'
import qs from 'qs'
export function login(data) {
  return request({
    url: '/dev-api/oauth/token',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    emulateJSON: true,
    data: qs.stringify({
      username: data.username,
      password: data.password,
      grant_type: 'password',
      client_id: 'test',
      client_secret: '123456'
    })
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}

