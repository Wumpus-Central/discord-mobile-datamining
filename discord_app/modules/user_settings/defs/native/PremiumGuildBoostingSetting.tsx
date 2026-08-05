// discord_app/modules/user_settings/defs/native/PremiumGuildBoostingSetting.tsx
import createToggle from "createToggle";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { componentDidMount } from "../../premium/native/UserSettingsPremiumGuildSubscriptions.tsx";

obj = {
  useTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t["+CbP2v"]);
  },
  parent: null,
  IconComponent: require("BoostGemIcon").BoostGemIcon,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.GUILD_BOOSTING,
  getComponent() {
    return componentDidMount /* componentDidMount */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/PremiumGuildBoostingSetting.tsx");

export default route;