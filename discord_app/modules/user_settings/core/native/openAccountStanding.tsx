// discord_app/modules/user_settings/core/native/openAccountStanding.tsx
import Constants from "../../../../Constants.tsx";
import openUserSettings from "openUserSettings.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const UserSettingsSections = Constants.UserSettingsSections;
const result = size.fileFinishedImporting("modules/user_settings/core/native/openAccountStanding.tsx");

export const openAccountStanding = function openAccountStanding() {
  const obj = { screen: UserSettingsSections.ACCOUNT_STANDING };
  obj.openUserSettings(obj);
};
