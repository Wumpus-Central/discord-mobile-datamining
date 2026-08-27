// === Module 14546: route ===

// Module 14546 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import BoostGemIcon from "BoostGemIcon" /* 8166 */;
import createToggle from "createToggle" /* 10988 */;

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["+CbP2v"]);
  },
  parent: null,
  IconComponent: BoostGemIcon.BoostGemIcon,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.GUILD_BOOSTING,
  getComponent() {
    return require(13071) /* componentDidMount */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/PremiumGuildBoostingSetting.tsx");

export default route;