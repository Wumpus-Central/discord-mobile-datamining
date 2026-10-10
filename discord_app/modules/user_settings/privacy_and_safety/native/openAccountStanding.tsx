// === Module 11506: openAccountStanding ===

// Module 11506 (openAccountStanding)
import Constants from "Constants" /* 1085 */;
import openUserSettings from "openUserSettings" /* 7093 */;
import size from "module_2" /* 2 */;

const UserSettingsSections = Constants.UserSettingsSections;
const result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/native/openAccountStanding.tsx");

export const openAccountStanding = function openAccountStanding() {
  openUserSettings.openUserSettings({ screen: UserSettingsSections.ACCOUNT_STANDING });
};