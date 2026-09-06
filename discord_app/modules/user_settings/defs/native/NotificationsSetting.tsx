// === Module 15478: route ===

// Module 15478 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import BellIcon from "BellIcon" /* 9776 */;
import getNamedExperiment from "getNamedExperiment" /* 14450 */;
import createToggle from "createToggle" /* 11468 */;

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.HcoRu0);
  },
  parent: null,
  IconComponent: BellIcon.BellIcon,
  usePredicate() {
    return !getNamedExperiment.useIsDeclarativeSettingsUIAvailable("LegacyNotificationsSetting");
  },
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.NOTIFICATIONS,
  getComponent() {
    return require(15479) /* SystemNotificationsSubLabel */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/NotificationsSetting.tsx");

export default route;