import React, { useState } from 'react';
import { Tabbar, TabbarItem, Div } from '@vkontakte/vkui';
import { Icon28UserCircleOutline, Icon28NewsfeedOutline } from '@vkontakte/icons';

const Footer = ({ goto, panel }) => {

    const [simple, setSimple] = useState(panel);

    return (
        <div style={{ padding: "40px 0 0"}}>
            <div style={{ maxWidth: 768, margin: "auto" }}>
                <Tabbar>
                    <TabbarItem selected={simple === "devel"} onClick={() => {goto("devel"); setSimple("devel")}}>
                        <Icon28NewsfeedOutline />
                    </TabbarItem>
                    <TabbarItem selected={simple === "menu"} onClick={() => {goto("menu"); setSimple("menu")}}>
                        <Icon28UserCircleOutline />
                    </TabbarItem>
                </Tabbar>
            </div>
        </div>
    );
};

export default Footer;