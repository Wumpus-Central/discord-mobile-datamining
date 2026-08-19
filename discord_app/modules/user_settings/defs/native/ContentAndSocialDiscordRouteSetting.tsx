// === Module 15025: route ===

// Module 15025 (route)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import FriendsIcon from "FriendsIcon" /* 4095 */;
import MobileUserSettings from "MobileUserSettings" /* 8198 */;
import ContentAndSocialSettings from "ContentAndSocialSettings" /* 15009 */;
import createToggle from "createToggle" /* 10669 */;

const obj = {
  route: ME.UserSettingsSections.CONTENT_AND_SOCIAL,
  getComponent() {
    return ContentAndSocialSettings.DiscordPermissionsPage;
  }
};
const route = createToggle.createRoute(obj);
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/ContentAndSocialDiscordRouteSetting.tsx");

export default route;