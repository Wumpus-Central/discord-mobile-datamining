// === Module 14786: route ===

// Module 14786 (route)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import BellIcon from "BellIcon" /* 10003 */;
import createToggle from "createToggle" /* 10669 */;

const obj = {
  route: ME.UserSettingsSections.NOTIFICATIONS,
  getComponent() {
    return require(14787) /* SystemNotificationsSubLabel */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/NotificationsSetting.tsx");

export default route;