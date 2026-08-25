// === Module 14400: route ===

// Module 14400 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import LaptopPhoneIcon from "LaptopPhoneIcon" /* 14401 */;
import createToggle from "createToggle" /* 10516 */;

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["+1h0k/"]);
  },
  parent: null,
  IconComponent: LaptopPhoneIcon.LaptopPhoneIcon,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.SESSIONS,
  getComponent() {
    return require(14403) /* UserSettingsSessions */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/DevicesSetting.tsx");

export default route;