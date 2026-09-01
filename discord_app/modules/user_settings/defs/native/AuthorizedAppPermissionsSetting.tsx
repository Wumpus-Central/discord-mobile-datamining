// discord_app/modules/user_settings/defs/native/AuthorizedAppPermissionsSetting.tsx
import set from "../../../../../_runtime/00002_set.js";
import ME from "../../../../Constants.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import MobileUserSettings from "../../core/native/SettingsConstants.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";
import { AuthorizedAppPermissionsScreen } from "../../authorized_apps/native/AuthorizedAppPermissionsScreen.tsx";

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.xrmhRX);
  },
  parent: MobileUserSettings.MobileUserSettings.AUTHORIZED_APP,
  unsearchable: true,
  screen: obj,
};
obj = {
  route: ME.UserSettingsSections.AUTHORIZED_APP_PERMISSIONS,
  getComponent() {
    return AuthorizedAppPermissionsScreen /* AuthorizedAppPermissionsScreen */.default;
  },
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/AuthorizedAppPermissionsSetting.tsx");

export default route;
