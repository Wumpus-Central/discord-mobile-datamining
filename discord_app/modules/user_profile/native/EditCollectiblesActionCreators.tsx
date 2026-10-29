// === Module 8704: EditCollectiblesActionCreators ===

// Module 8704 (EditCollectiblesActionCreators)
import Constants from "Constants" /* 1084 */;
import openUserSettings from "openUserSettings" /* 7549 */;
import size from "module_2" /* 2 */;

const UserSettingsSections = Constants.UserSettingsSections;
const result = size.fileFinishedImporting("modules/user_profile/native/EditCollectiblesActionCreators.tsx");

export function navigateToNitroManagement() {
  openUserSettings.openUserSettings({ screen: UserSettingsSections.PREMIUM });
}