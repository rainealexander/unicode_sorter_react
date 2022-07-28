import React from "react";

const ButtonGroup = (props) => {
  return (
    <div class='flex flex-col ml-3'>
      <input type="button" class='text-sm bg-white hover:bg-gray-500 hover:font-medium hover:text-white py-1 px-2 mt-2 border border-black rounded' value="Ignore"  />
      <input type="button" class='text-sm bg-white hover:bg-gray-500 hover:font-medium hover:text-white py-1 px-2 mt-2 border border-black rounded' value="Save"  />
      <input type="button" class='text-sm bg-white hover:bg-gray-500 hover:font-medium hover:text-white py-1 px-2 mt-2 border border-black rounded' value="Emoji"  />
    </div>
  );
};

export default ButtonGroup;
