// === Module 17021: ContentAndSocialDiscordRouteSetting ===

// Module 17021 (ContentAndSocialDiscordRouteSetting)
import Constants from "Constants" /* 1087 */;
import util from "util" /* 1128 */;
import FriendsIcon from "FriendsIcon" /* 5628 */;
import SettingsConstants from "SettingsConstants" /* 8276 */;
import ContentAndSocialScreen from "ContentAndSocialScreen" /* 17003 */;
import SettingBuilders from "SettingBuilders" /* 11099 */;
import size from "module_2" /* 2 */;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["/7xJCF"]);
  },
  parent: SettingsConstants.MobileUserSettings.CONTENT_AND_SOCIAL,
  IconComponent: FriendsIcon.FriendsIcon,
  screen: {
    route: Constants.UserSettingsSections.CONTENT_AND_SOCIAL,
    getComponent() {
      return ContentAndSocialScreen.DiscordPermissionsPage;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ContentAndSocialDiscordRouteSetting.tsx");

export default route;