import React from "react";
import { css } from "@emotion/css";
import dataset from "./ListData.json";

class List extends React.Component {
    render() {
        const ul = css`
            padding: 25px 0;
            margin: 0;
        `;
        const li = css`
            color: #010101;
            font-size: 1.3em;
            list-style: none;
            display: flex;
            align-items: center;
            margin-bottom: 8px;

            &:before {
                content: "";
                display: block;
                width: 15px;
                height: 2px;
                background: blue;
                margin-right: 8px;
            }
        `;

        return (
            <ul className={ul} id="search_list">
                {dataset.dataset.map((item) => (
                    <li className={li} key={item}>
                        {item}
                    </li>
                ))}
            </ul>
        );
    }
}

export default List;
