// === Module 15966: ConnectedGamesRouteSetting ===

// Module 15966 (ConnectedGamesRouteSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import FriendsIcon from "FriendsIcon" /* 4304 */;
import SettingsConstants from "SettingsConstants" /* 8027 */;
import ContentAndSocialScreen from "ContentAndSocialScreen" /* 15949 */;
import SettingBuilders from "SettingBuilders" /* 11540 */;
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