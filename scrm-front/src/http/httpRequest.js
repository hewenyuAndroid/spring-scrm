// 导入 axios 库
import axios from "axios";

// 配置 axios 请求的url和端口
axios.defaults.baseURL = "http://localhost:8081"

// get 请求
export function doGet(url, params) {
    axios({
        method: "get",
        url: url,
        params: params, //{"name": "zhangsan", "age": 20},
        dataType: "json"
    }).then(function (resp) {
        var s = "";
        resp.data.forEach(function (stu) {
            s += stu.name + "--------" + stu.age + "<br>"
        });
        document.getElementById("aaa").innerHTML = s;
    })
}

// post 请求
export function doPost(url, data) {
    return axios({
        method: "post",
        url: url,
        data: data, //{"name": "zhangsan", "age": 20},
        dataType: "json"
    })
}

// put 请求
export function doPut(url, data) {
    axios({
        method: "put",
        url: url,
        data: data, //{"name": "zhangsan", "age": 20},
        dataType: "json"
    }).then(function (resp) {
        var s = "";
        resp.data.forEach(function (stu) {
            s += stu.name + "--------" + stu.age + "<br>"
        });
        document.getElementById("aaa").innerHTML = s;
    })
}

// delete 请求
export function doDelete(url, params) {
    axios({
        method: "delete",
        url: url,
        params: params, //{"name": "zhangsan", "age": 20},
        dataType: "json"
    }).then(function (resp) {
        var s = "";
        resp.data.forEach(function (stu) {
            s += stu.name + "--------" + stu.age + "<br>"
        });
        document.getElementById("aaa").innerHTML = s;
    })
}

