// === Module 19895: EditStateContextProvider ===

// Module 19895 (EditStateContextProvider)
import noop from "module_19" /* 19 */;

const jsx = fn(21).jsx;
const redux = noop.createContext(undefined);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/edit_state/EditStateContextProvider.tsx");

export function useEditStateContext() {
  const context = noop.useContext(closure_2);
  if (null == context) {
    const _Error = Error;
    const error = new Error("No edit state; are you missing an <EditStateContextProvider />?");
    throw error;
  } else {
    return context;
  }
}
export function EditStateContextProvider(children) {
  return <redux.Provider value={Object.assign(children, Object.assign({ children: 0 }))}>{children.children}</redux.Provider>;
}