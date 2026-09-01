// discord_app/modules/user_settings/defs/native/PremiumProfileCustomizationTryItOutSetting.tsx
import set from "../../../../../_runtime/00002_set.js";
import ME from "../../../../Constants.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import MobileUserSettings from "../../core/native/SettingsConstants.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";
import { ProfileCustomizationTryItOutSettingScreen } from "../../premium/native/ProfileCustomizationTryItOutSettingScreen.tsx";

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.gMlDNd);
  },
  parent: MobileUserSettings.MobileUserSettings.PREMIUM,
  unsearchable: true,
  screen: obj,
};
obj = {
  route: ME.UserSettingsSections.PROFILE_CUSTOMIZATION_TRY_IT_OUT,
  getComponent() {
    return ProfileCustomizationTryItOutSettingScreen /* ProfileCustomizationTryItOutSettingScreen */.default;
  },
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting(
  "modules/user_settings/defs/native/PremiumProfileCustomizationTryItOutSetting.tsx",
);

export default route;
