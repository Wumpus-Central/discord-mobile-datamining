// === Module 8238: EditCollectiblesActionCreators ===

// Module 8238 (EditCollectiblesActionCreators)
import Constants from "Constants" /* 1074 */;
import openUserSettings from "openUserSettings" /* 7434 */;
import size from "module_2" /* 2 */;

const UserSettingsSections = Constants.UserSettingsSections;
const result = size.fileFinishedImporting("modules/user_profile/native/EditCollectiblesActionCreators.tsx");

export const navigateToNitroManagement = function navigateToNitroManagement() {
  const obj = { screen: UserSettingsSections.PREMIUM };
  obj.openUserSettings(obj);
};