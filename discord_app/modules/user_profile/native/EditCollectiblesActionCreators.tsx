// discord_app/modules/user_profile/native/EditCollectiblesActionCreators.tsx
import { UserSettingsSections } from "ME";
import { openUserSettings } from "../../user_settings/core/native/openUserSettings.tsx";

const result = require("set").fileFinishedImporting("modules/user_profile/native/EditCollectiblesActionCreators.tsx");

export const navigateToNitroManagement = function navigateToNitroManagement() {
  let obj = openUserSettings /* openUserSettings */;
  obj = { screen: UserSettingsSections.PREMIUM };
  obj.openUserSettings(obj);
};