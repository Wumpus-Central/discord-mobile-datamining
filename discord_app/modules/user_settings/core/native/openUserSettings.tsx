// discord_app/modules/user_settings/core/native/openUserSettings.tsx
import set from "../../../../../_runtime/00002_set.js";
import dispatcherDefault from "../../../../Dispatcher.tsx";
import ME from "../../../../Constants.tsx";
import getRootNavigationRef from "../../../main_tabs_v2/RootNavigationRef.native.tsx";
import handleFormClose from "../../../../stores/UserSettingsAccountStore.tsx";

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
