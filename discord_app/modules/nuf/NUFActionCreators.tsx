import { dispatcher } from "../../Dispatcher.tsx";
// discord_app/modules/nuf/NUFActionCreators.tsx
const result = require("set").fileFinishedImporting("modules/nuf/NUFActionCreators.tsx");

export const setNewUser = function setNewUser(ORGANIC_REGISTERED) {
  const importDefault = ORGANIC_REGISTERED;
  dispatcher.wait(() => {
    let obj = ORGANIC_REGISTERED(outer1_1[0]);
    obj = { type: "NUF_NEW_USER", newUserType: ORGANIC_REGISTERED };
    return obj.dispatch(obj);
  });
};
export const setNewUserFlowCompleted = function setNewUserFlowCompleted() {
  dispatcher.wait(() => callback(table[0]).dispatch({ type: "NUF_COMPLETE" }));
};