// === Module 14849: route ===

// Module 14849 (route)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import CircleInformationIcon from "CircleInformationIcon" /* 4330 */;
import ChangeLogScreen from "ChangeLogScreen" /* 14850 */;
import createToggle from "createToggle" /* 10669 */;

const obj = {
  route: ME.UserSettingsSections.CHANGE_LOG,
  getComponent() {
    return ChangeLogScreen.ChangeLogScreen;
  }
};
const route = createToggle.createRoute(obj);
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/ChangeLogSetting.tsx");

export default route;