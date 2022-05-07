import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, PanelHeaderClose } from '@vkontakte/vkui';
import Footer from '../components/Footer';
import CreateForm from '../components/CreateForm';


const Create = ({ id, goto }) => (
	<Panel id={id}>

		<PanelHeader
			left={<PanelHeaderClose onClick={() => goto('menu')} />}
		>
			Форма создания нового сервера
		</PanelHeader>

		<CreateForm />
	</Panel>
);

Create.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Create;