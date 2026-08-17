// discord_app/modules/user_settings/defs/native/AuthorizedAppPermissionsSetting.tsx
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import MobileUserSettings from "MobileUserSettings" /* 8198 */;
import createToggle from "createToggle" /* 10669 */;
import { AuthorizedAppPermissionsScreen } from "../../authorized_apps/native/AuthorizedAppPermissionsScreen.tsx";

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.xrmhRX);
  },
  parent: MobileUserSettings.MobileUserSettings.AUTHORIZED_APP,
  unsearchable: true,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.AUTHORIZED_APP_PERMISSIONS,
  getComponent() {
    return AuthorizedAppPermissionsScreen.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/AuthorizedAppPermissionsSetting.tsx");

export default route;