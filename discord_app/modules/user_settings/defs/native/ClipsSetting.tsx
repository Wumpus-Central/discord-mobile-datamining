// === Module 14328: route ===

// Module 14328 (route)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import ClipsIcon from "ClipsIcon" /* 14329 */;
import createToggle from "createToggle" /* 10669 */;

const obj = {
  route: ME.UserSettingsSections.CLIPS,
  getComponent() {
    return require(14331) /* ClipsSettingsScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/ClipsSetting.tsx");

export default route;