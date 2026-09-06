// discord_app/modules/user_settings/defs/native/NotificationsSetting.tsx
import set from "../../../../../_runtime/00002_set.js";
import ME from "../../../../Constants.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import BellIcon from "../../../../design/components/Icon/native/redesign/generated/BellIcon.tsx";
import getNamedExperiment from "../../../notifications/NotificationSettingsUtils.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";
import { SystemNotificationsSubLabel } from "../../notifications/native/SettingsNotificationScreen.tsx";

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
  screen: obj,
};
obj = {
  route: ME.UserSettingsSections.NOTIFICATIONS,
  getComponent() {
    return SystemNotificationsSubLabel /* SystemNotificationsSubLabel */.default;
  },
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/NotificationsSetting.tsx");

export default route;
