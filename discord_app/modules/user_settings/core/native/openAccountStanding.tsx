// === Module 11909: openAccountStanding ===

// Module 11909 (openAccountStanding)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;
import openUserSettings from "openUserSettings" /* 7382 */;

const UserSettingsSections = ME.UserSettingsSections;
const result = set.fileFinishedImporting("modules/user_settings/core/native/openAccountStanding.tsx");

export const openAccountStanding = function openAccountStanding() {
  let obj = openUserSettings;
  obj = { screen: UserSettingsSections.ACCOUNT_STANDING };
  obj.openUserSettings(obj);
};