// discord_app/modules/nuf/NUFActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
