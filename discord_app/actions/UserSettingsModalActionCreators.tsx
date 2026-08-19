// discord_app/actions/UserSettingsModalActionCreators.tsx
import obj132 from "../../_runtime/00002_obj132.js";
import dispatcherDefault from "../Dispatcher.tsx";

const result = obj132.fileFinishedImporting("actions/UserSettingsModalActionCreators.tsx");

export default {
  close() {
    dispatcherDefault.dispatch({ type: "USER_SETTINGS_MODAL_CLOSE" });
  },
  setSection(section) {
    const obj = { type: "USER_SETTINGS_MODAL_SET_SECTION", section };
    obj.dispatch(obj);
  }
};