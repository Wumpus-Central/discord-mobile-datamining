// discord_app/modules/user_profile/native/EditCollectiblesActionCreators.tsx
import set from "../../../../_runtime/00002_set.js";
import ME from "../../../Constants.tsx";
import openUserSettings from "../../user_settings/core/native/openUserSettings.tsx";

const UserSettingsSections = ME.UserSettingsSections;
const result = set.fileFinishedImporting("modules/user_profile/native/EditCollectiblesActionCreators.tsx");

export const navigateToNitroManagement = function navigateToNitroManagement() {
  let obj = openUserSettings;
  obj = { screen: UserSettingsSections.PREMIUM };
  obj.openUserSettings(obj);
};
