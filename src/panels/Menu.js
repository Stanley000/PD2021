import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Group, Header, SimpleCell } from '@vkontakte/vkui';
import { Icon28PaletteOutline, Icon28UserOutline, Icon28SettingsOutline } from '@vkontakte/icons';
import Footer from '../components/Footer';


const Menu = ({ id, goto }) => (
	<Panel id={id}>
		<Group>
            <Header mode="secondary">Меню</Header>
            <SimpleCell
              onClick={() => this.setState({ activePanel: "nothing" })}
              expandable
              before={<Icon28UserOutline />}
            >
              Список своих серверов
            </SimpleCell>
            <SimpleCell
              onClick={() => goto("create")}
              expandable
              before={<Icon28PaletteOutline />}
            >
              Создать сервер
            </SimpleCell>
            <SimpleCell
              onClick={() => this.setState({ activePanel: "nothing" })}
              expandable
              before={<Icon28SettingsOutline />}
            >
              Настройки
            </SimpleCell>
          </Group>
		<Footer goto={goto} panel={'menu'}/>
	</Panel>
);

Menu.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Menu;










