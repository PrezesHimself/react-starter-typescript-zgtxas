import React, { ChangeEvent, useCallback, useState } from 'react';
import { useDebounce } from './hooks/useDebounce';

export const App = () => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const [value, setValue] = useState<string>('');
  const debouncedValue = useDebounce(value, 500);

  return (
    <div style={{ padding: 10 }}>
      <p>Current value: {value}</p>
      <p>Debounced value: {debouncedValue}</p>

      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
};
