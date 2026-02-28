import { createContext } from "react";
const DefaultContext = createContext();

export function DefaultProvider({ children }) {
    return (
        <DefaultContext.Provider>
          {children}
        </DefaultContext.Provider>
      );
}

export function useDefaultContext() {
    return useContext(DefaultContext);
}