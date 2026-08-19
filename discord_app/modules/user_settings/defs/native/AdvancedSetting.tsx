// === Module 14837: route ===

// Module 14837 (route)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import SettingsIcon from "SettingsIcon" /* 7355 */;
import createToggle from "createToggle" /* 10669 */;

const obj = {
  route: ME.UserSettingsSections.ADVANCED,
  getComponent() {
    return require(14838).default;
  }
};
const route = createToggle.createRoute(obj);
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/AdvancedSetting.tsx");

export default route;