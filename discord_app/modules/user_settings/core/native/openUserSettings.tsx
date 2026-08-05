// discord_app/modules/user_settings/core/native/openUserSettings.tsx
import handleFormClose from "handleFormClose";
import { UserSettingsSections } from "ME";
import { dispatcher } from "../../../../Dispatcher.tsx";
import { getRootNavigationRef } from "../../../main_tabs_v2/RootNavigationRef.native.tsx";

const result = require("getRootNavigationRef").fileFinishedImporting("modules/user_settings/core/native/openUserSettings.tsx");

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
    dispatcher.dispatch(obj);
    rootNavigationRef.navigate("settings", screen);
    if (arg1 != null) {
      arg1();
    }
    const obj3 = dispatcher;
  }
};