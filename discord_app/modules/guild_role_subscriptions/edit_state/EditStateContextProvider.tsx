// === Module 17944: EditStateContextProvider ===

// Module 17944 (EditStateContextProvider)
import c from "c" /* 576 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_2 = ["children"];
const jsx = fn(21).jsx;
const redux = noop.createContext(undefined);
fn(558);
const ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const context = noop.useContext(closure_6);
  if (null == context) {
    const _Error = Error;
    const error = new Error("No edit state; are you missing an <EditStateContextProvider />?");
    throw error;
  } else {
    return context;
  }
}) : (() => {
  const context = noop.useContext(closure_6);
  if (null == context) {
    const _Error = Error;
    const error = new Error("No edit state; are you missing an <EditStateContextProvider />?");
    throw error;
  } else {
    return context;
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/edit_state/EditStateContextProvider.tsx");

export const useEditStateContext = tmp2;
export const EditStateContextProvider = ReactCompilerGating.isReactCompilerEnabled() ? ((children) => {
  const cResult = c.c(6);
  if (cResult[0] !== children) {
    children = children.children;
    const tmp6 = _objectWithoutProperties(children, closure_2);
    cResult[0] = children;
    cResult[1] = children;
    cResult[2] = tmp6;
    let tmp3 = tmp6;
    let tmp2 = children;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
  }
  if (cResult[3] === tmp2) {
    if (cResult[4] === tmp3) {
      let tmp7 = cResult[5];
    }
    return tmp7;
  }
  const tmp8 = <redux.Provider value={tmp3}>{tmp2}</redux.Provider>;
  cResult[3] = tmp2;
  cResult[4] = tmp3;
  cResult[5] = tmp8;
  tmp7 = tmp8;
}) : ((children) => <redux.Provider value={Object.assign(children, Object.assign({ children: 0 }))}>{children.children}</redux.Provider>);