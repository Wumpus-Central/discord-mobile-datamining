// discord_app/actions/UserSettingsModalActionCreators.tsx
const result = require("set").fileFinishedImporting("actions/UserSettingsModalActionCreators.tsx");

export default {
  close() {
    require("../Dispatcher.tsx").dispatch({ type: "USER_SETTINGS_MODAL_CLOSE" });
  },
  setSection(section) {
    let obj = require("../Dispatcher.tsx");
    obj = { type: "USER_SETTINGS_MODAL_SET_SECTION", section };
    obj.dispatch(obj);
  }
};