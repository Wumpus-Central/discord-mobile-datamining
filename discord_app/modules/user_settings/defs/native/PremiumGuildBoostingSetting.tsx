// discord_app/modules/user_settings/defs/native/PremiumGuildBoostingSetting.tsx
import set from "../../../../../_runtime/00002_set.js";
import ME from "../../../../Constants.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import BoostGemIcon from "../../../../design/components/Icon/native/redesign/generated/BoostGemIcon.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";
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
    return componentDidMount /* componentDidMount */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/PremiumGuildBoostingSetting.tsx");

export default route;