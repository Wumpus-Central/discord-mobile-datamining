// discord_app/modules/user_settings/defs/native/NotificationsSetting.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import ME from "../../../../Constants.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import BellIcon from "../../../../design/components/Icon/native/redesign/generated/BellIcon.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";
import { SystemNotificationsSubLabel } from "../../notifications/native/SettingsNotificationScreen.tsx";

const obj = {
  route: ME.UserSettingsSections.NOTIFICATIONS,
  getComponent() {
    return SystemNotificationsSubLabel /* SystemNotificationsSubLabel */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/NotificationsSetting.tsx");

export default route;