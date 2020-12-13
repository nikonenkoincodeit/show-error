import { BASE_URL } from '../constants'
import { responseAnalysis } from './responseAnalysis'

var myHeaders = new Headers();
myHeaders.append("accept", "application/json");

var requestOptions = {
  method: 'GET',
  headers: myHeaders
};

export const getСategory = async () => {
    try {
        return await fetch(`${BASE_URL}call/specific/work1`, requestOptions)
            .then(response => response.json())
            .then(response => responseAnalysis(response))
    } catch (e) {
        showNotifications('')
        console.log(e);
    }
}

export const searchData = async ( search ) => {
    try {
        return await fetch(`${BASE_URL}call/find?search=${search}`, requestOptions)
            .then(response => response.json())
            .then(response => responseAnalysis(response))
    } catch (e) {
        showNotifications('')
    }
}

export const getUser = async ( search ) => {

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer 1eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmNmYjBhMWE3ODc4ZTAwMTc2Y2M2MzEiLCJzaWQiOiI1ZmQ2MzZmZjkxN2M2NzAwMTc4Zjc5ZjQiLCJpYXQiOjE2MDc4NzQzMDQsImV4cCI6MTYwNzg3NzkwNH0.RO8IMB0eva_xYM0rP6lD-NLVlebIa3m_RyZEwE0xDkE");

let requestOptions = {
    headers: myHeaders,
}

try {
    fetch(`${BASE_URL}user`, requestOptions)
    .then(response => response.json())
    .then(result => responseAnalysis(result))
} catch (error) {
    showNotifications('');
} 

}
