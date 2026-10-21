// === Module 17117: ConnectedGamesRouteSetting ===

// Module 17117 (ConnectedGamesRouteSetting)
import Constants from "Constants" /* 1087 */;
import util from "util" /* 1128 */;
import FriendsIcon from "FriendsIcon" /* 5648 */;
import SettingsConstants from "SettingsConstants" /* 8308 */;
import ContentAndSocialScreen from "ContentAndSocialScreen" /* 17098 */;
import SettingBuilders from "SettingBuilders" /* 11155 */;
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