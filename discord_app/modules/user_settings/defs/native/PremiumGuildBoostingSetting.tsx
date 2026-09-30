// === Module 14734: PremiumGuildBoostingSetting ===

// Module 14734 (PremiumGuildBoostingSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import BoostGemIcon from "BoostGemIcon" /* 8877 */;
import SettingBuilders from "SettingBuilders" /* 11211 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["+CbP2v"]);
  },
  parent: null,
  IconComponent: BoostGemIcon.BoostGemIcon,
  screen: {
    route: Constants.UserSettingsSections.GUILD_BOOSTING,
    getComponent() {
      return require("UserSettingsPremiumGuildSubscriptions").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/PremiumGuildBoostingSetting.tsx");

export default route;