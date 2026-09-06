// discord_app/modules/user_profile/native/EditCollectiblesActionCreators.tsx
import Constants from "../../../Constants.tsx";
import openUserSettings from "../../user_settings/core/native/openUserSettings.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const UserSettingsSections = Constants.UserSettingsSections;
const result = size.fileFinishedImporting("modules/user_profile/native/EditCollectiblesActionCreators.tsx");

export const navigateToNitroManagement = function navigateToNitroManagement() {
  const obj = { screen: UserSettingsSections.PREMIUM };
  obj.openUserSettings(obj);
};
