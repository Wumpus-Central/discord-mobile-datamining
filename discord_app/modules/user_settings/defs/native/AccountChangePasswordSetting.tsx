// discord_app/modules/user_settings/defs/native/AccountChangePasswordSetting.tsx
import createToggle from "createToggle";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { AccountEditPassword } from "../../account/native/AccountEditPassword.tsx";

obj = {
  useTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t["CIGa+7"]);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.ACCOUNT_CHANGE_PASSWORD,
  getComponent() {
    return AccountEditPassword.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/AccountChangePasswordSetting.tsx");

export default route;