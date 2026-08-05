// discord_app/modules/user_settings/defs/native/PremiumPlanSelectSetting.tsx
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.u95Dt4);
  },
  parent: require("MobileSetting").MobileSetting.PREMIUM,
  unsearchable: true,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.PREMIUM_PLAN_SELECT,
  getComponent() {
    return require("../../premium/native/PremiumPlanSelectSettingScreen.tsx") /* PremiumPlanSelectSettingScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/PremiumPlanSelectSetting.tsx");

export default route;