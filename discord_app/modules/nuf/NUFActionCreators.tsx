// === Module 12746: nuf/NUFActionCreators ===

// Module 12746 (nuf/NUFActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/nuf/NUFActionCreators.tsx");

export const setNewUser = function setNewUser(ORGANIC_REGISTERED) {
  importDefault = ORGANIC_REGISTERED;
  DispatcherDefault.wait(() => {
    const obj = { type: "NUF_NEW_USER", newUserType };
    return obj.dispatch(obj);
  });
};
export const setNewUserFlowCompleted = function setNewUserFlowCompleted() {
  DispatcherDefault.wait(() => DispatcherDefault.dispatch({ type: "NUF_COMPLETE" }));
};