// === Module 11925: setNewUser ===

// Module 11925 (setNewUser)
import obj132 from "obj132" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const result = obj132.fileFinishedImporting("modules/nuf/NUFActionCreators.tsx");

export const setNewUser = function setNewUser(ORGANIC_REGISTERED) {
  importDefault = ORGANIC_REGISTERED;
  dispatcherDefault.wait(() => {
    ORGANIC_REGISTERED(dependencyMap[0]);
    const obj = { type: "NUF_NEW_USER", newUserType: ORGANIC_REGISTERED };
    return obj.dispatch(obj);
  });
};
export const setNewUserFlowCompleted = function setNewUserFlowCompleted() {
  dispatcherDefault.wait(() => callback(table[0]).dispatch({ type: "NUF_COMPLETE" }));
};