// === Module 14457: route ===

// Module 14457 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.HcoRu0);
  },
  parent: null,
  IconComponent: require("BellIcon").BellIcon,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.NOTIFICATIONS,
  getComponent() {
    return require(14458) /* SystemNotificationsSubLabel */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/NotificationsSetting.tsx");

export default route;