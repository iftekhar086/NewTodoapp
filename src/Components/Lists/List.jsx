import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import styles from './List.module.css';
import { FaEdit, FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import {Button as Btn} from 'react-bootstrap'

const List = ({
  items,
  swapItem,
  doneBtnHandler,
  deletebtnHandler,
  editbtnHandler,
  cancelbtnHandler,
  changeInputeditHandler,
  savebtnHandler,
}) => {
  const listItems = items.map((task, index) => (
    <li key={index} className={task.isDone ? `${styles.listitem} p-2` : 'p-2'}>
      {!task.isEditing && (
        <div className={styles['list-content']}>
          <div className={styles.content}>{task.item}</div>
          <Btn
            className="ms-2"
            variant='dark'
            disabled={task.isDone}
            onClick={() => editbtnHandler(index)}>
              {<FaEdit />}
            </Btn>
        </div>
      )}

      {task.isEditing && (
        <>
          <Input
            value={task.editingItem}
            changeHandler={(data) => changeInputeditHandler(index, data)}
            isEditInput="true"
          />
          <Btn         
            className="ms-2 "
            variant='success'
            onClick={() => savebtnHandler(index)}
            disabled={!task.editingItem.trim().length}>
             Save
         </Btn>
          <Btn
          variant='info'
            btnClassName="ms-2"
            onClick={() => cancelbtnHandler(index)}>
             Cancel
          </Btn>
        </>
      )}

      <Btn
        className="me-2 ms-2 bg-transparent "
        variant='light'
        onClick={() => swapItem(index, index - 1)}
        disabled={index === 0}>
        {<FaArrowUp />}
        </Btn>
      <Btn
        className="me-2 bg-transparent "
        variant='light'
        onClick={() => swapItem(index, index + 1)}
        disabled={index === items.length - 1}>
        {<FaArrowDown />}
      </Btn>

      {task.isDone && (
        <Btn
          // ClassName={`me-2  ${styles.deleteBtn}  bg-transparent`}
          className="me-2   "
          variant='danger'
          onClick={() => deletebtnHandler(index)}>
          {<MdDelete />}
        </Btn>
      )}

      {!task.isDone && (
        <Btn
          className="me-2 "
          variant='warning'
          onClick={() => doneBtnHandler(index)}
          disabled={task.isEditing}>
          Done
    </Btn>
      )}
    </li>
  ));

  return <ul className={styles.list}>{listItems}</ul>;
};

export default List;
