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
const [data, setData] = useState(initialValue.data);

function ContextProvider({ children }: Props) {
  return (
    <PlanetsContext.Provider value={ { data, setData } }>
      {children}
    </PlanetsContext.Provider>
  );
}

export default ContextProvider;
