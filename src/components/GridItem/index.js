import React from "react";
import * as C from "./styles";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaTrash,
} from "react-icons/fa";

const GridItem = ({ item, onDelete }) => {

  const date = new Date(item.date);
  date.setDate(date.getDate() + 1)
  const formated = (new Intl.DateTimeFormat('pt-br')).format(date);
  console.log(formated)

  return (
    <C.Tr>
      <C.Td>{formated}</C.Td>
      <C.Td>{item.desc}</C.Td>
      <C.Td>{`R$ ${item.amount},00`}</C.Td>
      <C.Td alignCenter>
        {item.expense ? (
          <FaRegArrowAltCircleDown color="red" />
        ) : (
          <FaRegArrowAltCircleUp color="green" />
        )}
      </C.Td>
      <C.Td alignCenter>
        <FaTrash onClick={() => onDelete(item.id)} />
      </C.Td>
    </C.Tr>
  );
};

export default GridItem;
