import {request} from "./request";

export function getHomeMultidata() {
  return request({
    url: 'home/multidata'
  })
//  此request的函数的返回值是一个Promise
}
