// === Module 6885: openUserSettings ===

// Module 6885 (openUserSettings)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import RootNavigationRef from "RootNavigationRef" /* 4737 */;
import UserSettingsAccountStore from "UserSettingsAccountStore" /* 6886 */;
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
  const obj2 = RootNavigationRef;
  const rootNavigationRef = obj2.getRootNavigationRef();
  const tmp2 = null != rootNavigationRef && rootNavigationRef.isReady();
  if (tmp2) {
    screen = undefined;
    const dispatch = DispatcherDefault.dispatch;
    DispatcherDefault;
    if (screen != null) {
      screen = screen.screen;
    }
    if (screen == null) {
      screen = UserSettingsSections.OVERVIEW;
    }
    const obj3 = { type: "USER_SETTINGS_MODAL_INIT", section: screen };
    dispatch(obj3);
    const obj4 = { pop: flag };
    rootNavigationRef.navigate("settings", screen, obj4);
    if (fn != null) {
      fn();
    }
  }
};