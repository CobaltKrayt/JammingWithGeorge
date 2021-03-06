import React from "react";
import {MenuList} from '../helpers/MenuList'
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css"

const Menu = () => {

    return(
        <div className={"menu"}>
            <h1 className={"menuTitle"}>Our Menu</h1>
            <div className={"menuList"}>
                {MenuList.map((menuItem,key) => {
                    return(
                        <MenuItem
                            key={key}
                            image={menuItem.image}
                            name={menuItem.name}
                            description={menuItem.description}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Menu