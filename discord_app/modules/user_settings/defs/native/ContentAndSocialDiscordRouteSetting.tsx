// === Module 18579: ContentAndSocialDiscordRouteSetting ===

// Module 18579 (ContentAndSocialDiscordRouteSetting)
import Constants from "Constants" /* 1072 */;
import util from "util" /* 1113 */;
import FriendsIcon from "FriendsIcon" /* 6018 */;
import SettingsConstants from "SettingsConstants" /* 9202 */;
import ContentAndSocialScreen from "ContentAndSocialScreen" /* 18561 */;
import SettingBuilders from "SettingBuilders" /* 12406 */;
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