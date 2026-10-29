// === Module 13148: openAccountStanding ===

// Module 13148 (openAccountStanding)
import Constants from "Constants" /* 1084 */;
import openUserSettings from "openUserSettings" /* 7549 */;
import size from "module_2" /* 2 */;

const UserSettingsSections = Constants.UserSettingsSections;
const result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/native/openAccountStanding.tsx");

export function openAccountStanding() {
  openUserSettings.openUserSettings({ screen: UserSettingsSections.ACCOUNT_STANDING });
}