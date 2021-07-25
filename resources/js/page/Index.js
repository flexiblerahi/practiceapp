// import React, {useEffect} from "react";
import ReactDOM, { findDOMNode } from "react-dom"
import $ from 'jquery';
import React, { Component, useEffect } from 'react'

const Index = () => {
    useEffect(()=> {
        jQuerycode()
    }, [])

    const count = 0;
    const jQuerycode = () => {
        $("#mydiv").on("click", function() {
            alert(`count ${count+1}`)
        })
    }

    // const jQuerycode = () => {
    //     // var state = true;
    //     // $( "#button" ).on( "click", function() {
    //     //     if ( state ) {
    //     //       $( "#effect" ).animate({
    //     //         backgroundColor: "#red",
    //     //         color: "#fff",
    //     //         width: 500
    //     //       }, 3000 );
    //     //     } else {
    //     //       $( "#effect" ).animate({
    //     //         backgroundColor: "#fff",
    //     //         color: "#000",
    //     //         width: 240
    //     //       }, 3000 );
    //     //     }
    //     //     state = !state;
    //     //   });
    // }

    return (<>
        <div className="divClass" id="mydiv">hello world</div>
        
            </>)

}

export default Index

// export default class Index extends Component {

//     jQuerycode = () => {
//         $(".button").click(function(){
//          alert('found')
        
//         });
//       }
//       componentDidMount(){
//         this.jQuerycode()
//       }
//       render() {
//         return (
//           <div>
//             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci vel voluptates sit voluptas illum eveniet consectetur corrupti suscipit nesciunt et, inventore velit quaerat ex deleniti ut facere, voluptate ab? Ducimus.</p>
//             <button className="button">Click here</button>
//           </div>
//         )
//       }
// }


if (document.getElementById("react-content")) {
    ReactDOM.render(<Index />, document.getElementById("react-content"));
}