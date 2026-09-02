// === Module 15305: route ===

// Module 15305 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import BellIcon from "BellIcon" /* 9768 */;
import createToggle from "createToggle" /* 11288 */;

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.HcoRu0);
  },
  parent: null,
  IconComponent: BellIcon.BellIcon,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.NOTIFICATIONS,
  getComponent() {
    return require(15306) /* SystemNotificationsSubLabel */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/NotificationsSetting.tsx");

export default route;