// discord_app/modules/user_settings/core/native/openUserSettings.tsx
import DispatcherDefault from "../../../../Dispatcher.tsx";
import Constants from "../../../../Constants.tsx";
import RootNavigationRef from "../../../main_tabs_v2/RootNavigationRef.native.tsx";
import UserSettingsAccountStore from "../../../../stores/UserSettingsAccountStore.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const UserSettingsSections = Constants.UserSettingsSections;
const result = size.fileFinishedImporting("modules/user_settings/core/native/openUserSettings.tsx");

export const openUserSettings = (screen, fn) => {
  let obj = RootNavigationRef;
  const rootNavigationRef = obj.getRootNavigationRef();
  if (tmp2) {
    screen = undefined;
    if (screen != null) {
      screen = screen.screen;
    }
    if (screen == null) {
      screen = UserSettingsSections.OVERVIEW;
    }
    obj = { type: "USER_SETTINGS_MODAL_INIT", section: screen };
    DispatcherDefault.dispatch(obj);
    rootNavigationRef.navigate("settings", screen);
    if (fn != null) {
      fn();
    }
  }
};
