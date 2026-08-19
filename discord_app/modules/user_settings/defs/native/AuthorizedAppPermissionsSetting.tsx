// discord_app/modules/user_settings/defs/native/AuthorizedAppPermissionsSetting.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import ME from "../../../../Constants.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import MobileUserSettings from "../../core/native/SettingsConstants.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";
import { AuthorizedAppPermissionsScreen } from "../../authorized_apps/native/AuthorizedAppPermissionsScreen.tsx";

const obj = {
  route: ME.UserSettingsSections.AUTHORIZED_APP_PERMISSIONS,
  getComponent() {
    return AuthorizedAppPermissionsScreen /* AuthorizedAppPermissionsScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/AuthorizedAppPermissionsSetting.tsx");

export default route;