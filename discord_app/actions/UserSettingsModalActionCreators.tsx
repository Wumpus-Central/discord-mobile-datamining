// discord_app/actions/UserSettingsModalActionCreators.tsx
import { dispatcher } from "../Dispatcher.tsx";
const result = require("set").fileFinishedImporting("actions/UserSettingsModalActionCreators.tsx");

export default {
  close() {
    dispatcher.dispatch({ type: "USER_SETTINGS_MODAL_CLOSE" });
  },
  setSection(section) {
    let obj = dispatcher;
    obj = { type: "USER_SETTINGS_MODAL_SET_SECTION", section };
    obj.dispatch(obj);
  }
};