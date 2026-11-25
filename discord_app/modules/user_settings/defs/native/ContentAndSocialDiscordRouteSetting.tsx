// === Module 17530: ContentAndSocialDiscordRouteSetting ===

// Module 17530 (ContentAndSocialDiscordRouteSetting)
import Constants from "Constants" /* 1071 */;
import util from "util" /* 1112 */;
import FriendsIcon from "FriendsIcon" /* 5697 */;
import SettingsConstants from "SettingsConstants" /* 9513 */;
import ContentAndSocialScreen from "ContentAndSocialScreen" /* 17512 */;
import SettingBuilders from "SettingBuilders" /* 11914 */;
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