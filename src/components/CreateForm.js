import React from 'react';

import { Group, FormLayout, FormLayoutGroup, FormItem, Input, Select, Textarea, File, Button } from '@vkontakte/vkui';
import { Icon24Document } from '@vkontakte/icons';

const CreateForm = () => {

  return (
    <Group>
      <FormLayout>
        <FormLayoutGroup mode="vertical">
          <FormItem top="Название">
            <Input />
          </FormItem>
          <FormItem top="IP-адрес">
            <Input />
          </FormItem>
          <FormItem top="Версия">
            <Select
              placeholder="Выберите версию сервера"
              options={[
                {
                  value: "0",
                  label: "1.18.2",
                },
                {
                  value: "1",
                  label: "1.18.1",
                },
                {
                  value: "2",
                  label: "1.18",
                },
                {
                  value: "3",
                  label: "1.17.1",
                },
                {
                  value: "4",
                  label: "1.17",
                },
                {
                  value: "5",
                  label: "1.16.5",
                },
                {
                  value: "6",
                  label: "1.16.4",
                },
                {
                  value: "7",
                  label: "1.16.3",
                },
              ]}
            />
          </FormItem>
          <FormItem top="Загрузите превью сервера">
            <File before={<Icon24Document />} controlSize="l" mode="secondary" />
          </FormItem>
          <FormItem top="О сервере">
            <Textarea />
          </FormItem>
          <FormItem>
                <Button size="l" stretched>
                  Сохранить
                </Button>
              </FormItem>
        </FormLayoutGroup>
      </FormLayout>
    </Group>
  );
};

export default CreateForm;