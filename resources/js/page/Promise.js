import ReactDOM from "react-dom"
import React, { useEffect, useReducer, useState } from "react"
import axios from "axios";

const Index = () => {

    const userLeft = false
    const userWatchingCatMeme = true

    function watchTutorialCallBack(callback, errorCallback) {
        // console.log('found er watcher');
        if(userLeft) {
            errorCallback({
                name: 'User Left',
                message: ':('
            })
        } else if(userWatchingCatMeme) {
            errorCallback({
                name: 'User Watching Cat Meme',
                message: 'WebDiv Simplified > cat'
            })
        } else {
            callback('Thanks for Subscribe')
        }
    }

    function watchTutorialPromise() {
        return new Promise((resolve, reject) => {

            if(userLeft) {
                reject({
                    name: 'User Left',
                    message: ':('
                })
            } else if(userWatchingCatMeme) {
                reject({
                    name: 'User Watching Cat Meme',
                    message: 'WebDiv Simplified > cat'
                })
            } else {
                resolve('Thanks for Subscribe')
            }
        })
    }
    
    useEffect(() => {
        watchTutorialPromise().then((message) => {
            console.log(`all error message`, message)
        }).catch((error) => {
            console.log(`name: ${error.name}, message: ${error.message}`)
        })

        // watchTutorialCallBack((message) => {
        //     console.log('Success' + message);
        // }, (error) => {
        //     console.log(error.name + '-->'+ error.message)
        // });
        // promisefun();
        // promise.then((message) => {
        //     console.log(`this is in the then`, message)
        // }).catch((message)=> {
        //     console.log(`this is the catch`, message)
        // })
    }, [])

    // let promise = new Promise((resolve, reject) => {
    //     let a = 1+2;
    //     if(a==2) {
    //         axios.get('/post')
    //     } else {
    //         reject('Failed')
    //     }
    // })

    return(<></>)


};

export default Index;

if (document.getElementById("react-content")) {
    ReactDOM.render(<Index />, document.getElementById("react-content"));
}
