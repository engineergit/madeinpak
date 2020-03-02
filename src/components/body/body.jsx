import React, { Component } from "react";
import "./body.css";
import SearchBar from "./searchBar"
import CategoryMenu from "./categoryMenu"
import Stories from "./stories";
export default class Body extends Component {
    render() {
        return (
            <div>
                <SearchBar />
                <CategoryMenu />
                <Stories/>
            </div>
        )
    }
}

