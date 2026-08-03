// === Module 16670: useEditStateContext ===

// Module 16670 (useEditStateContext)
import importAllResult from "noop";
import { jsx } from "jsxProd";

let c0 = importAllResult;
let context = importAllResult.createContext(undefined);
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/edit_state/EditStateContextProvider.tsx");

export const useEditStateContext = function useEditStateContext() {
  const context = importAllResult.useContext(closure_2);
  if (null == context) {
    const _Error = Error;
    const error = new Error("No edit state; are you missing an <EditStateContextProvider />?");
    throw error;
  } else {
    return context;
  }
};
export const EditStateContextProvider = function EditStateContextProvider(children) {
  return <redux.Provider value={Object.assign(arg0, Object.create(null))}>{arg0.children}</redux.Provider>;
};