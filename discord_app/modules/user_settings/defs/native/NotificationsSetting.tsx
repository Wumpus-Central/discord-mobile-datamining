// discord_app/modules/user_settings/defs/native/NotificationsSetting.tsx
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import BellIcon from "BellIcon" /* 10003 */;
import createToggle from "createToggle" /* 10669 */;
import { SystemNotificationsSubLabel } from "../../notifications/native/SettingsNotificationScreen.tsx";

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
    return SystemNotificationsSubLabel.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/NotificationsSetting.tsx");

export default route;