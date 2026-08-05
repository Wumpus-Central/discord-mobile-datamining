// discord_app/modules/user_settings/defs/native/AccountConfirmPasswordSetting.tsx
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["7qKDrE"]);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT,
  unsearchable: true,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.ACCOUNT_CONFIRM_PASSWORD,
  getComponent() {
    return require("../../account/native/UserSettingsConfirmPassword.tsx") /* UserSettingsConfirmPasswordWrapped */.UserSettingsConfirmPasswordWrapped;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/AccountConfirmPasswordSetting.tsx");

export default route;