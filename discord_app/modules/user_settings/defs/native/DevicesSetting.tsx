// discord_app/modules/user_settings/defs/native/DevicesSetting.tsx
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["+1h0k/"]);
  },
  parent: null,
  IconComponent: require("LaptopPhoneIcon").LaptopPhoneIcon,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.SESSIONS,
  getComponent() {
    return require(14098) /* UserSettingsSessions */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/DevicesSetting.tsx");

export default route;