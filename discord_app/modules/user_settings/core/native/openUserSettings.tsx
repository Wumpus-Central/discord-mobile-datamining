// === Module 7360: openUserSettings ===

// Module 7360 (openUserSettings)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import getRootNavigationRef from "getRootNavigationRef" /* 4230 */;
import handleFormClose from "handleFormClose" /* 7361 */;

const UserSettingsSections = ME.UserSettingsSections;
const result = obj132.fileFinishedImporting("modules/user_settings/core/native/openUserSettings.tsx");

export const openUserSettings = (screen, fn) => {
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
    if (fn != null) {
      fn();
    }
  }
  tmp2 = null != rootNavigationRef && rootNavigationRef.isReady();
};