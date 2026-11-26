// === Module 14459: EditCollectiblesActionCreators ===

// Module 14459 (EditCollectiblesActionCreators)
import Constants from "Constants" /* 1071 */;
import openUserSettings from "openUserSettings" /* 8109 */;
import size from "module_2" /* 2 */;

const UserSettingsSections = Constants.UserSettingsSections;
const result = size.fileFinishedImporting("modules/user_profile/native/EditCollectiblesActionCreators.tsx");

export function navigateToNitroManagement() {
  openUserSettings.openUserSettings({ screen: UserSettingsSections.PREMIUM });
}