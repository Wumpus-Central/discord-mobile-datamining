// === Module 7624: openUserSettings ===

// Module 7624 (openUserSettings)
import DispatcherDefault from "Dispatcher" /* 573 */;
import Constants from "Constants" /* 1074 */;
import RootNavigationRef from "RootNavigationRef" /* 4614 */;
import UserSettingsAccountStore from "UserSettingsAccountStore" /* 7625 */;
import size from "module_2" /* 2 */;

const UserSettingsSections = Constants.UserSettingsSections;
const result = size.fileFinishedImporting("modules/user_settings/core/native/openUserSettings.tsx");

export const openUserSettings = (screen, fn) => {
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
  if (tmp2) {
    screen = undefined;
    if (screen != null) {
      screen = screen.screen;
    }
    if (screen == null) {
      screen = UserSettingsSections.OVERVIEW;
    }
    const obj2 = { type: "USER_SETTINGS_MODAL_INIT", section: screen };
    DispatcherDefault.dispatch(obj2);
    rootNavigationRef.navigate("settings", screen);
    if (fn != null) {
      fn();
    }
  }
  tmp2 = null != rootNavigationRef && rootNavigationRef.isReady();
};