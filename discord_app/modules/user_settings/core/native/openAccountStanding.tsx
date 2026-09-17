// === Module 12061: openAccountStanding ===

// Module 12061 (openAccountStanding)
import Constants from "Constants" /* 1074 */;
import openUserSettings from "openUserSettings" /* 7496 */;
import size from "module_2" /* 2 */;

const UserSettingsSections = Constants.UserSettingsSections;
const result = size.fileFinishedImporting("modules/user_settings/core/native/openAccountStanding.tsx");

export const openAccountStanding = function openAccountStanding() {
  openUserSettings.openUserSettings({ screen: UserSettingsSections.ACCOUNT_STANDING });
};