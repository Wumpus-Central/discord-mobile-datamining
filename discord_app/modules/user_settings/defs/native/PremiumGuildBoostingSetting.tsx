// discord_app/modules/user_settings/defs/native/PremiumGuildBoostingSetting.tsx
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import BoostGemIcon from "BoostGemIcon" /* 7979 */;
import createToggle from "createToggle" /* 10669 */;
import { componentDidMount } from "../../premium/native/UserSettingsPremiumGuildSubscriptions.tsx";

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
    return componentDidMount.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/PremiumGuildBoostingSetting.tsx");

export default route;