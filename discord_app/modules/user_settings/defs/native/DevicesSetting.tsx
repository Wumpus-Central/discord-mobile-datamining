// === Module 14789: route ===

// Module 14789 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import LaptopPhoneIcon from "LaptopPhoneIcon" /* 14790 */;
import createToggle from "createToggle" /* 11292 */;

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
    return require(14792) /* UserSettingsSessions */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/DevicesSetting.tsx");

export default route;