// === Module 12430: nuf/NUFActionCreators ===

// Module 12430 (nuf/NUFActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

let importDefault;

const result = size.fileFinishedImporting("modules/nuf/NUFActionCreators.tsx");

export const setNewUser = function setNewUser(ORGANIC_REGISTERED) {
  let newUserType;
  importDefault = ORGANIC_REGISTERED;
  let obj = DispatcherDefault;
  obj.wait(() => {
    const obj = DispatcherDefault;
    const obj2 = { type: "NUF_NEW_USER", newUserType };
    return obj.dispatch(obj2);
  });
};
export const setNewUserFlowCompleted = function setNewUserFlowCompleted() {
  let obj = DispatcherDefault;
  obj.wait(() => {
    const obj = DispatcherDefault;
    return obj.dispatch({ type: "NUF_COMPLETE" });
  });
};