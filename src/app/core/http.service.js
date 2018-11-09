import axios from 'axios'
import { Toast } from 'mint-ui';

axios.interceptors.request.use((config) => {
  if ( !config.headers.common['Accept'] ){
    config.headers.common["Accept"] = "application/json";
  }
  if ( !config.headers.common["Content-Type"] ){
    config.headers.common["Content-Type"] = "application/json";
  }
  let accessToken = localStorage.getItem("access_token");
  if ( accessToken ){
    config.headers.common['Authorization'] = 'Bearer ' + accessToken;
  }
  return config;
}, (error) => {
    Promise.reject( error );
});

axios.interceptors.response.use((resp) => {
  return resp.data;
}, (error) => {
    const status = error.response.status;
    let msg = "状态：" + status;
    if(status === 401){
        msg = msg + ",请求未授权，请重新登录系统后重试！";
    }else if(status === 400 ){
        msg = msg + ",请求参数出错，请检查后重试！";
    }else if(status === 404 ){
        msg = msg + ",请求地址不存在，请检查后重试！";
    }else if(status >= 500){
        msg = msg + ",服务器请求出现错误，请重试！";
    }else{
        msg = msg + ",请求出现未知错误，请检查网络后重试！";
    }
    Toast({
        message: msg ,
        position: 'top',
        duration: 5000
    });
    Promise.reject( error );
});

export const HTTP = {
    get( url , config){
        return axios.get(url , config);
    },
    post(url , data , config){
        return axios.post(url , data , config);
    },
    put(url , data , config ){
        return axios.put(url , data , config);
    },
    delete(url , data , config ){
        return axios.delete(url , config);
    }
}