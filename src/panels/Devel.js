import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, CardGrid, Group, ContentCard, Header, SubnavigationButton, Counte, SubnavigationBar } from '@vkontakte/vkui';
import { Icon24Filter, Icon28NewsfeedOutline, Icon28MessageOutline, } from '@vkontakte/icons';
import Footer from '../components/Footer';
import Filter from '../components/Filter';
import './Devel.css';

const Devel = ({ id, goto }) => (

    <Panel id={id}>
        <Filter/>
        <Group>
            <CardGrid size="l" >
                <ContentCard
                    onClick={() => goto('show')}
                    src="https://images.unsplash.com/photo-1603988492906-4fb0fb251cf8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
                    subtitle="TestServer"
                    maxHeight={100}
                />
                <ContentCard
                    onClick={() => goto('show')}
                    src="https://images.unsplash.com/photo-1603988492906-4fb0fb251cf8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
                    subtitle="TestServer"
                    maxHeight={100}
                />
                <ContentCard
                    onClick={() => goto('show')}
                    src="https://images.unsplash.com/photo-1603988492906-4fb0fb251cf8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
                    subtitle="TestServer"
                    maxHeight={100}
                />
                <ContentCard
                    onClick={() => goto('show')}
                    src="https://images.unsplash.com/photo-1603988492906-4fb0fb251cf8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
                    subtitle="TestServer"
                    maxHeight={100}
                />
                <ContentCard
                    onClick={() => goto('show')}
                    src="https://images.unsplash.com/photo-1603988492906-4fb0fb251cf8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
                    subtitle="TestServer"
                    maxHeight={100}
                />
                <ContentCard
                    onClick={() => goto('show')}
                    src="https://images.unsplash.com/photo-1603988492906-4fb0fb251cf8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
                    subtitle="TestServer"
                    maxHeight={100}
                />
            </CardGrid>
        </Group>
        <Footer goto={goto} panel={'devel'} />
    </Panel>
);

Devel.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
};

export default Devel;