// === Module 7382: openUserSettings ===

// Module 7382 (openUserSettings)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 573 */;
import ME from "ME" /* 1074 */;
import getRootNavigationRef from "getRootNavigationRef" /* 4418 */;
import handleFormClose from "handleFormClose" /* 7383 */;

const UserSettingsSections = ME.UserSettingsSections;
const result = set.fileFinishedImporting("modules/user_settings/core/native/openUserSettings.tsx");

export const openUserSettings = (screen) => {
  let obj = getRootNavigationRef;
  const rootNavigationRef = obj.getRootNavigationRef();
  if (tmp2) {
    screen = undefined;
    if (screen != null) {
      screen = screen.screen;
    }
    if (screen == null) {
      screen = UserSettingsSections.OVERVIEW;
    }
    obj = { type: "USER_SETTINGS_MODAL_INIT", section: null };
    obj[1] = screen;
    dispatcherDefault.dispatch(obj);
    rootNavigationRef.navigate("settings", screen);
    if (arg1 != null) {
      arg1();
    }
    const obj3 = dispatcherDefault;
  }
};