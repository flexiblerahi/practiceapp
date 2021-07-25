import ReactDOM from "react-dom"
import React, { useEffect, useReducer, useState } from "react"
import axios from "axios";

const Index = () => {

    function makeRequest(location) {
        return new Promise((resolve, reject) => {
            if(location == 'Google') {
                resolve('Google says hi')
            } else {
                reject('We can only talk to Google')
            }
        })
    }

    function processRequest(response) {
        return new Promise((resolve, reject) => {
            console.log('Processing response')
            resolve('Extra Information '+ response)
        })
    }

    useEffect(() => {
        callFun()
    }, [])

    async function callFun() {
        try {
            const response = await makeRequest('Facebook')
            const another = await processRequest(response)
            console.log(another);
        } catch(error) {
            console.log('error::> ' + error)
        }
    }

    // useEffect(() => {
    //     makeRequest('Google').then(response => {
    //         console.log('Response Received::>' +response)
    //         return processRequest(response)
    //     }).then(processResponse => {
    //         console.log('processResponse::> ' + processResponse)
    //     }).catch(error => {
    //         console.log('error::> ' + error)
    //     })
    // }, [])

    return(<></>)


};

export default Index;

if (document.getElementById("react-content")) {
    ReactDOM.render(<Index />, document.getElementById("react-content"));
}
