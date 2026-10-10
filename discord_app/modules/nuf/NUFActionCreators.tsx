// === Module 12512: nuf/NUFActionCreators ===

// Module 12512 (nuf/NUFActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/nuf/NUFActionCreators.tsx");

export const setNewUser = function setNewUser(ORGANIC_REGISTERED) {
  DispatcherDefault.dispatch({ type: "NUF_NEW_USER", newUserType: ORGANIC_REGISTERED });
};
export const setNewUserFlowCompleted = function setNewUserFlowCompleted() {
  DispatcherDefault.dispatch({ type: "NUF_COMPLETE" });
};