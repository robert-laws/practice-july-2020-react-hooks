import React, { useState } from 'react';

const StateHookObject = () => {
  const [name, setName] = useState({
    firstName: '',
    lastName: '',
  });

  const handleChange = (event) => {
    setName({
      ...name,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <h3>useState with object</h3>
      <p>
        Name: {name.firstName} {name.lastName}
      </p>
      <form>
        <input
          type='text'
          name='firstName'
          value={name.firstName}
          onChange={handleChange}
        />
        <input
          type='text'
          name='lastName'
          value={name.lastName}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default StateHookObject;
