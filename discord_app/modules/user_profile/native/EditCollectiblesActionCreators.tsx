// === Module 8091: navigateToNitroManagement ===

// Module 8091 (navigateToNitroManagement)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import openUserSettings from "openUserSettings" /* 6254 */;

const UserSettingsSections = ME.UserSettingsSections;
const result = set.fileFinishedImporting("modules/user_profile/native/EditCollectiblesActionCreators.tsx");

export const navigateToNitroManagement = function navigateToNitroManagement() {
  let obj = openUserSettings;
  obj = { screen: UserSettingsSections.PREMIUM };
  obj.openUserSettings(obj);
};