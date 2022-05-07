import React, { useState } from 'react';
import { usePlatform, IOS, Group, SubnavigationButton, Counter, SubnavigationBar, SplitLayout, SplitCol, ModalRoot, ModalPageHeader, ModalPage, PanelHeaderClose, PanelHeaderButton, Button, FormLayout, FormItem, Checkbox } from '@vkontakte/vkui';
import { Icon24Filter, Icon24FavoriteOutline, Icon24Dismiss } from '@vkontakte/icons';

const MODAL_NAME = "filters";

const FILTERS_SIZE = [
    { value: "1.18.2", label: "1.18.2" },
    { value: "1.18.1", label: "1.18" },
    { value: "1.18", label: "1.18" },
    { value: "1.17.1", label: "1.17.1" },
    { value: "1.17", label: "1.17" },
    { value: "1.16.5", label: "1.16.5" },
    { value: "1.16.4", label: "1.16.4" },
    { value: "1.16.3", label: "1.16.3" },
];

const FILTERS_STYLE = [
    { value: "Вечерний", label: "Вечерний" },
    { value: "Деловой", label: "Деловой" },
    { value: "Повседневный", label: "Повседневный" },
    { value: "Спортивный", label: "Спортивный" },
];


const Filter = () => {

    const platform = usePlatform();

    const [filtersModalOpened, setFiltersModalOpened] = useState(false);
    const [filtersCount, setFiltersCount] = useState(2);

    const [filterSizes, setFilterSizes] = useState([36]);
    const [filterStyles, setFilterStyles] = useState(["Вечерний"]);


    const [highRatingSelected, setHighRatingSelected] = useState(false);
    const [faveSelected, setFaveSelected] = useState(false);

    const openModal = () => {
        setFiltersModalOpened(true);
    };

    const closeModal = () => {
        setFiltersModalOpened(false);
    };

    const onChangeFilterSize = (e) => {
        const { value, checked } = e.currentTarget;
        if (checked) {
            setFilterSizes([...filterSizes, +value]);
        } else {
            setFilterSizes(filterSizes.filter((v) => v !== +value));
        }
    };

    const onChangeFilterStyle = (e) => {
        const { value, checked } = e.currentTarget;
        if (checked) {
            setFilterStyles([...filterStyles, value]);
        } else {
            setFilterStyles(filterStyles.filter((v) => v !== value));
        }
    };

    const applyFilters = () => {
        let count = 0;

        filterSizes.length && count++;
        filterStyles.length && count++;

        closeModal();
        setFiltersCount(count);
    };

    const modal = (
        <ModalRoot
            activeModal={filtersModalOpened ? MODAL_NAME : null}
            onClose={closeModal}
        >
            <ModalPage
                id={MODAL_NAME}
                header={
                    <ModalPageHeader
                        left={platform !== IOS && <PanelHeaderClose onClick={closeModal} />}
                        right={
                            platform === IOS && (
                                <PanelHeaderButton onClick={closeModal}>
                                    <Icon24Dismiss />
                                </PanelHeaderButton>
                            )
                        }
                    >
                        Фильтры
                    </ModalPageHeader>
                }
            >
                <FormLayout>
                    <FormItem top="Выбор версий">
                        {FILTERS_SIZE.map(({ value, label }) => {
                            return (
                                <Checkbox
                                    value={value}
                                    checked={filterSizes.includes(value)}
                                    onChange={onChangeFilterSize}
                                >
                                    {label}
                                </Checkbox>
                            );
                        })}
                    </FormItem>

                    <FormItem>
                        <Button size="l" stretched onClick={applyFilters}>
                            Показать результаты
                        </Button>
                    </FormItem>
                </FormLayout>
            </ModalPage>
        </ModalRoot>
    );


    return (
        <SplitLayout modal={modal}>
            <SplitCol>
                <Group>
                    <SubnavigationBar>
                        <SubnavigationButton
                            before={<Icon24Filter />}
                            selected={filtersCount > 0}
                            expandable
                            after={
                                filtersCount > 0 && (
                                    <Counter mode="primary" size="s">
                                        {filtersCount}
                                    </Counter>
                                )
                            }
                            onClick={openModal}
                        >
                            Фильтры
                        </SubnavigationButton>

                        <SubnavigationButton
                            selected={highRatingSelected}
                            onClick={() => setHighRatingSelected(!highRatingSelected)}
                        >
                            Высокий рейтинг
                        </SubnavigationButton>

                        <SubnavigationButton
                            before={<Icon24FavoriteOutline />}
                            selected={faveSelected}
                            onClick={() => setFaveSelected(!faveSelected)}
                        >
                            Избранное
                        </SubnavigationButton>
                    </SubnavigationBar>
                </Group>
            </SplitCol>
        </SplitLayout>
    );
};

export default Filter;