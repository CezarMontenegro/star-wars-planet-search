import React, { createContext, ReactNode, useState } from 'react';

interface Props {
  children: ReactNode;
}

interface PlanetsContextType {
  data: any[];
  setData: (newState: []) => void;
}

const initialValue = {
  data: [],
  setData: () => {},
};

export const PlanetsContext = createContext<PlanetsContextType>(initialValue);

function ContextProvider({ children }: Props) {
  const [data, setData] = useState(initialValue.data);

  return (
    <PlanetsContext.Provider value={ { data, setData } }>
      {children}
    </PlanetsContext.Provider>
  );
}

export default ContextProvider;
