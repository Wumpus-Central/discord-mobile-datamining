// discord_app/modules/user_profile/native/EditCollectiblesActionCreators.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import ME from "../../../Constants.tsx";
import openUserSettings from "../../user_settings/core/native/openUserSettings.tsx";

const UserSettingsSections = ME.UserSettingsSections;
const result = obj132.fileFinishedImporting("modules/user_profile/native/EditCollectiblesActionCreators.tsx");

export const navigateToNitroManagement = function navigateToNitroManagement() {
  const obj = { screen: UserSettingsSections.PREMIUM };
  obj.openUserSettings(obj);
};