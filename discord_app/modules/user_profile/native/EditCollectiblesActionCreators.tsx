// === Module 8388: navigateToNitroManagement ===

// Module 8388 (navigateToNitroManagement)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import openUserSettings from "openUserSettings" /* 7360 */;

const UserSettingsSections = ME.UserSettingsSections;
const result = obj132.fileFinishedImporting("modules/user_profile/native/EditCollectiblesActionCreators.tsx");

export const navigateToNitroManagement = function navigateToNitroManagement() {
  const obj = { screen: UserSettingsSections.PREMIUM };
  obj.openUserSettings(obj);
};