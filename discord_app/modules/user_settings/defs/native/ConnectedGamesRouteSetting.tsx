// === Module 18455: ConnectedGamesRouteSetting ===

// Module 18455 (ConnectedGamesRouteSetting)
import Constants from "Constants" /* 1072 */;
import util from "util" /* 1113 */;
import FriendsIcon from "FriendsIcon" /* 5955 */;
import SettingsConstants from "SettingsConstants" /* 9135 */;
import ContentAndSocialScreen from "ContentAndSocialScreen" /* 18436 */;
import SettingBuilders from "SettingBuilders" /* 12311 */;
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