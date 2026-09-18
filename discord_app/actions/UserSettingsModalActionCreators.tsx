// === Module 7186: UserSettingsModalActionCreators ===

// Module 7186 (UserSettingsModalActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("actions/UserSettingsModalActionCreators.tsx");

export default {
  close() {
    DispatcherDefault.dispatch({ type: "USER_SETTINGS_MODAL_CLOSE" });
  },
  setSection(section) {
    DispatcherDefault.dispatch({ type: "USER_SETTINGS_MODAL_SET_SECTION", section });
  }
};