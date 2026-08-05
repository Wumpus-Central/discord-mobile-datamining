// discord_app/modules/user_settings/defs/native/PremiumProfileCustomizationTryItOutSetting.tsx
import createToggle from "createToggle";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { ProfileCustomizationTryItOutSettingScreen } from "../../premium/native/ProfileCustomizationTryItOutSettingScreen.tsx";

obj = {
  useTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t.gMlDNd);
  },
  parent: require("MobileSetting").MobileSetting.PREMIUM,
  unsearchable: true,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.PROFILE_CUSTOMIZATION_TRY_IT_OUT,
  getComponent() {
    return ProfileCustomizationTryItOutSettingScreen /* ProfileCustomizationTryItOutSettingScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/PremiumProfileCustomizationTryItOutSetting.tsx");

export default route;