// discord_app/modules/nuf/NUFActionCreators.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import dispatcherDefault from "../../Dispatcher.tsx";

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