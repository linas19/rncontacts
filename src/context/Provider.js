import React, {createContext, useReducer} from 'react';
import authInitialState from './initialStates/authInitialState';
import contactsInitialState from './initialStates/contactsInitialState';
import auth from './reducers/auth';
import contacts from './reducers/contacts';

export const GlobalContext = createContext({});

const GlobalProvider = ({children}) => {
  const [authState, authDispatch] = useReducer(auth, authInitialState);
  console.log(authState)
//   const [contactsState, contactsDispatch] = useReducer(
//     contacts,
//     contactsInitialState,
//   );

  return (
    <GlobalContext.Provider
      value={{authState, authDispatch}}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;