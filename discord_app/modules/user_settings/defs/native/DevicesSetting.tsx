import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { UserSettingsSessions } from "../../devices/native/UserSettingsSessions.tsx";
// discord_app/modules/user_settings/defs/native/DevicesSetting.tsx
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t["+1h0k/"]);
  },
  parent: null,
  IconComponent: require("LaptopPhoneIcon").LaptopPhoneIcon,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.SESSIONS,
  getComponent() {
    return UserSettingsSessions /* UserSettingsSessions */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/DevicesSetting.tsx");

export default route;