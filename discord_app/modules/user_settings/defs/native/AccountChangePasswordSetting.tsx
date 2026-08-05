// discord_app/modules/user_settings/defs/native/AccountChangePasswordSetting.tsx
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["CIGa+7"]);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.ACCOUNT_CHANGE_PASSWORD,
  getComponent() {
    return require("../../account/native/AccountEditPassword.tsx").default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/AccountChangePasswordSetting.tsx");

export default route;