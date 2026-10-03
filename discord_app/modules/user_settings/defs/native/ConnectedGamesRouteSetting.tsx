// === Module 15791: ConnectedGamesRouteSetting ===

// Module 15791 (ConnectedGamesRouteSetting)
import Constants from "Constants" /* 1085 */;
import util from "util" /* 1126 */;
import FriendsIcon from "FriendsIcon" /* 4831 */;
import SettingsConstants from "SettingsConstants" /* 7634 */;
import ContentAndSocialScreen from "ContentAndSocialScreen" /* 15772 */;
import SettingBuilders from "SettingBuilders" /* 11129 */;
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