import ReactDOM from "react-dom";
import React, { useEffect, useReducer, useState } from "react";
import PostServices from "../Services/PostServices";

const Index = () => {
    const [state, setState] = useState({
        fnum: 0,
        lnum: 0,
        total: 0,
        data: [],
    });

    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setState({ ...state, [name]: value }, () => totalNumber);
    };

    useEffect(() => {
        getPosts();
        console.log("and this is before time");
        setTimeout(() => {
            $("#another").DataTable();
        }, 1000);
    }, []);

    const getPosts = async () => {
        const response = await PostServices.list();
        // console.log("🚀 ~ file: index.js ~ line 26 ~ getPosts ~ response", response)
        setState({ data: response });
    };

    let totalNumber = parseInt(state.fnum) + parseInt(state.lnum);

    // console.log(`state`, state);

    let postData = "";
    if (state.data) {
        postData = state.data.map((post) => (
            <tr key={post.id}>
                <td>{post.name}</td>
                <td>{post.email}</td>
                <td>{post.address}</td>
            </tr>
        ));
        // $('#example').DataTable();
        // postData.length > 0 ? $('#example').DataTable() : '';
    }

    // if(postData > 0) ;

    return (
        <>
            <div className="MainDiv">
                <div className="container">
                    <table id="another" className="display">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>email</th>
                                <th>Address</th>
                            </tr>
                        </thead>
                        <tbody>{postData}</tbody>
                        <tfoot>
                            <tr>
                                <th>Name</th>
                                <th>email</th>
                                <th>Address</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Index;

if (document.getElementById("react-content")) {
    ReactDOM.render(<Index />, document.getElementById("react-content"));
}
