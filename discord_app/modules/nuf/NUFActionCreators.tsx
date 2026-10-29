// === Module 14160: nuf/NUFActionCreators ===

// Module 14160 (nuf/NUFActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/nuf/NUFActionCreators.tsx");

export function setNewUser(ORGANIC_REGISTERED) {
  DispatcherDefault.dispatch({ type: "NUF_NEW_USER", newUserType: ORGANIC_REGISTERED });
}
export function setNewUserFlowCompleted() {
  DispatcherDefault.dispatch({ type: "NUF_COMPLETE" });
}