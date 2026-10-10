// === Module 7093: openUserSettings ===

// Module 7093 (openUserSettings)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import RootNavigationRef from "RootNavigationRef" /* 4977 */;
import UserSettingsAccountStore from "UserSettingsAccountStore" /* 7094 */;
import size from "module_2" /* 2 */;

const UserSettingsSections = Constants.UserSettingsSections;
const result = size.fileFinishedImporting("modules/user_settings/core/native/openUserSettings.tsx");

export const openUserSettings = (screen, fn, arg2) => {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  let flag = obj.pop;
  if (flag === undefined) {
    flag = true;
  }
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
  if (tmp2) {
    screen = undefined;
    if (screen != null) {
      screen = screen.screen;
    }
    if (screen == null) {
      screen = UserSettingsSections.OVERVIEW;
    }
    const obj3 = { type: "USER_SETTINGS_MODAL_INIT", section: screen };
    DispatcherDefault.dispatch(obj3);
    const obj5 = { pop: flag };
    rootNavigationRef.navigate("settings", screen, obj5);
    if (fn != null) {
      fn();
    }
  }
  tmp2 = null != rootNavigationRef && rootNavigationRef.isReady();
};