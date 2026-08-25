// === Module 8433: navigateToNitroManagement ===

// Module 8433 (navigateToNitroManagement)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import openUserSettings from "openUserSettings" /* 6125 */;

const UserSettingsSections = ME.UserSettingsSections;
const result = set.fileFinishedImporting("modules/user_profile/native/EditCollectiblesActionCreators.tsx");

export const navigateToNitroManagement = function navigateToNitroManagement() {
  let obj = openUserSettings;
  obj = { screen: UserSettingsSections.PREMIUM };
  obj.openUserSettings(obj);
};