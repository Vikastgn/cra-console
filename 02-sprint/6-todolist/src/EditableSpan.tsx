// @flow 
import * as React from 'react';
import {ChangeEvent, useState} from "react";

type Props = {
    oldTitle: string
    changeItem: (oldTitle: string) => void
};
export const EditableSpan = ({oldTitle,changeItem}: Props) => {
    const [editMode, setEditeMode] = useState(false)

    const [newTitle, setNewTitle] = useState(oldTitle)

    const activateEditMode = () => {
        setEditeMode(!editMode)
        if (editMode && newTitle.trim()) {
            changeItem(newTitle.trim())
        }
    }
    const changeTitleHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(event.currentTarget.value)
    }


    return (
        editMode
            ? <input
                value={newTitle}
                onBlur={activateEditMode}
                autoFocus
                onChange={changeTitleHandler}
            />
            : <span onDoubleClick={activateEditMode}>{oldTitle}</span>
    );
};
// Этот код представляет компонент EditableSpan, который отображает текстовое значение в виде span или input в зависимости от значения editMode.
//
// При начальном значении editMode = false, на странице будет отображаться span, так как тернарный оператор возвращаем {value}. То есть, если editMode равен false, отображается элемент span с текстовым значением value и возможностью редактирования при двойном клике на него (запускается функция activateEditMode).
//
// Когда пользователь дважды щелкает по span, функция activateEditMode устанавливает значение editMode в true, что приводит к показу input вместо span. Значение текста input устанавливается равным value, а также устанавливается фокус на этот элемент с помощью autoFocus. Когда input теряет фокус событием onBlur, срабатывает функция deActivateEditMode, которая устанавливает значение editMode обратно в false, переключая отображение обратно на span.
//
// Таким образом, при клике на span текст становится редактируемым, и после редактирования и потери фокуса input, текст снова отображается как не редактируемый span.