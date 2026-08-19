// === Module 14302: route ===

// Module 14302 (route)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import LaptopPhoneIcon from "LaptopPhoneIcon" /* 14303 */;
import createToggle from "createToggle" /* 10669 */;

const obj = {
  route: ME.UserSettingsSections.SESSIONS,
  getComponent() {
    return require(14305) /* UserSettingsSessions */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/DevicesSetting.tsx");

export default route;