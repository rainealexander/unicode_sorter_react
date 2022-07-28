import React from 'react';
import Button from './Button.jsx'

const ButtonGroup = (props) => {
  const defaultStyle = 'text-sm bg-white hover:bg-gray-500 hover:font-medium hover:text-white py-1 px-2 mt-2 border border-black rounded';
  return (
    <div class='flex flex-col ml-3'>
      <Button classes={defaultStyle} onClick={() => {}} buttonContent={'Ignore'} />
      <Button classes={defaultStyle} onClick={() => {}} buttonContent={'Save'} />
      <Button classes={defaultStyle} onClick={() => {}} buttonContent={'Emoji'} />
    </div>
  );
};

export default ButtonGroup;
