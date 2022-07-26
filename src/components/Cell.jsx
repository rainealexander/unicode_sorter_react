import React, { useState, useEffect } from 'react';

const Cell = (props) => {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    setCharacter(props.character);
  }, [props.character]);

  return (
    <td key={props.cellId} 
      id={props.cellId} 
      ata-testid={props.cellId} 
      class="border border-solid border-black border-spacing-1 w-7 h-8">
        {String.fromCodePoint(character) }
    </td>
  )
};

export default Cell;
