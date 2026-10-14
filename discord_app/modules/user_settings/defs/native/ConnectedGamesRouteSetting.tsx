// === Module 16643: ConnectedGamesRouteSetting ===

// Module 16643 (ConnectedGamesRouteSetting)
import Constants from "Constants" /* 1085 */;
import util from "util" /* 1126 */;
import FriendsIcon from "FriendsIcon" /* 4817 */;
import SettingsConstants from "SettingsConstants" /* 8000 */;
import ContentAndSocialScreen from "ContentAndSocialScreen" /* 16624 */;
import SettingBuilders from "SettingBuilders" /* 10767 */;
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