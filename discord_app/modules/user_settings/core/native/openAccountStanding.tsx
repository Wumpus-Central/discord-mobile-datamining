// === Module 12039: openAccountStanding ===

// Module 12039 (openAccountStanding)
import Constants from "Constants" /* 1074 */;
import openUserSettings from "openUserSettings" /* 7485 */;
import size from "module_2" /* 2 */;

const UserSettingsSections = Constants.UserSettingsSections;
const result = size.fileFinishedImporting("modules/user_settings/core/native/openAccountStanding.tsx");

export const openAccountStanding = function openAccountStanding() {
  const obj = { screen: UserSettingsSections.ACCOUNT_STANDING };
  obj.openUserSettings(obj);
};