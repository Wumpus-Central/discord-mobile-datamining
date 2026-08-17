// discord_app/modules/user_profile/native/EditCollectiblesActionCreators.tsx
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import openUserSettings from "openUserSettings" /* 7360 */;

const UserSettingsSections = ME.UserSettingsSections;
const result = set.fileFinishedImporting("modules/user_profile/native/EditCollectiblesActionCreators.tsx");

export const navigateToNitroManagement = function navigateToNitroManagement() {
  let obj = openUserSettings;
  obj = { screen: UserSettingsSections.PREMIUM };
  obj.openUserSettings(obj);
};