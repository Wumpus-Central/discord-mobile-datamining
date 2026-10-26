// === Module 17288: ConnectedGamesRouteSetting ===

// Module 17288 (ConnectedGamesRouteSetting)
import Constants from "Constants" /* 1087 */;
import util from "util" /* 1128 */;
import FriendsIcon from "FriendsIcon" /* 5666 */;
import SettingsConstants from "SettingsConstants" /* 8332 */;
import ContentAndSocialScreen from "ContentAndSocialScreen" /* 17269 */;
import SettingBuilders from "SettingBuilders" /* 11208 */;
import size from "module_2" /* 2 */;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.YpCiMt);
  },
  parent: SettingsConstants.MobileUserSettings.CONTENT_AND_SOCIAL,
  IconComponent: FriendsIcon.FriendsIcon,
  screen: {
    route: Constants.UserSettingsSections.CONTENT_AND_SOCIAL,
    getComponent() {
      return ContentAndSocialScreen.ConnectedGamesPage;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ConnectedGamesRouteSetting.tsx");

export default route;