// === Module 15119: route ===

// Module 15119 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import FriendsIcon from "FriendsIcon" /* 4099 */;
import MobileUserSettings from "MobileUserSettings" /* 8235 */;
import ContentAndSocialSettings from "ContentAndSocialSettings" /* 15103 */;
import createToggle from "createToggle" /* 10516 */;

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["/7xJCF"]);
  },
  parent: MobileUserSettings.MobileUserSettings.CONTENT_AND_SOCIAL,
  IconComponent: FriendsIcon.FriendsIcon,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.CONTENT_AND_SOCIAL,
  getComponent() {
    return ContentAndSocialSettings.DiscordPermissionsPage;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/ContentAndSocialDiscordRouteSetting.tsx");

export default route;