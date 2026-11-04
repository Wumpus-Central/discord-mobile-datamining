// === Module 8887: EditCollectiblesActionCreators ===

// Module 8887 (EditCollectiblesActionCreators)
import Constants from "Constants" /* 1072 */;
import openUserSettings from "openUserSettings" /* 7703 */;
import size from "module_2" /* 2 */;

const UserSettingsSections = Constants.UserSettingsSections;
const result = size.fileFinishedImporting("modules/user_profile/native/EditCollectiblesActionCreators.tsx");

export function navigateToNitroManagement() {
  openUserSettings.openUserSettings({ screen: UserSettingsSections.PREMIUM });
}