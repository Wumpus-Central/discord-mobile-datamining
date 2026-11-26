// === Module 12583: openAccountStanding ===

// Module 12583 (openAccountStanding)
import Constants from "Constants" /* 1071 */;
import openUserSettings from "openUserSettings" /* 8109 */;
import size from "module_2" /* 2 */;

const UserSettingsSections = Constants.UserSettingsSections;
const result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/native/openAccountStanding.tsx");

export function openAccountStanding() {
  openUserSettings.openUserSettings({ screen: UserSettingsSections.ACCOUNT_STANDING });
}