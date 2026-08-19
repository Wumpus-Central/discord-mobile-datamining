// discord_app/modules/user_settings/defs/native/PremiumGuildBoostingSetting.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import ME from "../../../../Constants.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import BoostGemIcon from "../../../../design/components/Icon/native/redesign/generated/BoostGemIcon.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";
import { componentDidMount } from "../../premium/native/UserSettingsPremiumGuildSubscriptions.tsx";

const obj = {
  route: ME.UserSettingsSections.GUILD_BOOSTING,
  getComponent() {
    return componentDidMount /* componentDidMount */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/PremiumGuildBoostingSetting.tsx");

export default route;