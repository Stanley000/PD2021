import React from 'react';

import { Group, Div, FormLayoutGroup, SimpleCell, CardGrid, Input, Select, ContentCard, Card, Textarea, InfoRow, File, Button } from '@vkontakte/vkui';
import { Icon24Document } from '@vkontakte/icons';

const ShowForm = () => {

    return (
        <Group>
         
            <Div style={{ display: "flex" }}>
                <img src="https://images.unsplash.com/photo-1603988492906-4fb0fb251cf8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80" width={"100%"} height={150} style={{ borderRadius: "10px" }}/>
            </Div>       

            <SimpleCell disabled>
                <InfoRow header="Название">PlayGame</InfoRow>
            </SimpleCell>

            <SimpleCell>
                <InfoRow header="IP-адрес">mc.playgame.com</InfoRow>
            </SimpleCell>

            <SimpleCell disabled>
                <InfoRow header="Версия">1.18.2</InfoRow>
            </SimpleCell>

            <SimpleCell disabled multiline>
                <InfoRow header="О сервере">Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст..</InfoRow>
            </SimpleCell>
        </Group>
    );
};

export default ShowForm;