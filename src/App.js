import React from "react";
import { TextField } from "@mui/material";
import { css } from "@emotion/css";
import List from "./List";
import "./App.css";

class App extends React.Component {
    state = {
        input: "",
        defaultValue: undefined
    };
    componentDidMount() {
        const hash = new URL(window.location.href);
        const params = hash.search;
        const newValue = params.split("=")[1];
        if (newValue) {
            this.setState({ defaultValue: newValue });
            console.log(newValue);
            document.getElementById("search_input").value = newValue;
            const event = new Event("input", { value: newValue });
            document.getElementById("search_input").dispatchEvent(event);
        }
    }
    componentDidUpdate(prevState) {
        if (this.state.input !== prevState.input) {
            window.history.pushState(
                {},
                "",
                window.location.origin + "?search=" + this.state.input
            );
            console.log(window.location.href);
        }
    }

    render() {
        const search = css`
            padding: 20px;
        `;

        const h1 = css`
            color: blue;
            font-size: 2em;
            text-align: center;
        `;

        return (
            <div className={search}>
                <div className="search__bar">
                    <h1 className={h1}>Filter</h1>
                    <TextField
                        id="search_input"
                        placeholder="Search..."
                        fullWidth
                        onInput={() => {
                            let input, filter, ul, li, i;
                            input = document.getElementById("search_input");
                            this.setState({ input: input.value });
                            filter = input.value.toUpperCase();
                            ul = document.getElementById("search_list");
                            li = ul.getElementsByTagName("li");
                            for (i = 0; i < li.length; i++) {
                                if (
                                    li[i].innerHTML
                                        .toUpperCase()
                                        .indexOf(filter) > -1
                                ) {
                                    li[i].style.display = "";
                                } else {
                                    li[i].style.display = "none";
                                }
                            }
                        }}
                    />
                </div>
                <div className="search__results">
                    <List />
                </div>
            </div>
        );
    }
}

export default App;
