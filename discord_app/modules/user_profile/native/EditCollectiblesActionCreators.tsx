// === Module 8275: EditCollectiblesActionCreators ===

// Module 8275 (EditCollectiblesActionCreators)
import Constants from "Constants" /* 1085 */;
import openUserSettings from "openUserSettings" /* 7084 */;
import size from "module_2" /* 2 */;

const UserSettingsSections = Constants.UserSettingsSections;
const result = size.fileFinishedImporting("modules/user_profile/native/EditCollectiblesActionCreators.tsx");

export const navigateToNitroManagement = function navigateToNitroManagement() {
  openUserSettings.openUserSettings({ screen: UserSettingsSections.PREMIUM });
};