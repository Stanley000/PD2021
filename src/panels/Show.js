import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, PanelHeaderClose } from '@vkontakte/vkui';
import ShowForm from '../components/ShowForm';


const Show = ({ id, goto }) => (
	<Panel id={id}>

		<PanelHeader
			left={<PanelHeaderClose onClick={() => goto('devel')} />}
		>
			Информация о сервере
		</PanelHeader>

		<ShowForm />
	</Panel>
);

Show.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Show;