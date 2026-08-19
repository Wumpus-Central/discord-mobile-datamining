// discord_app/modules/user_settings/defs/native/AuthorizedAppsSetting.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import ME from "../../../../Constants.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import KeyIcon from "../../../../design/components/Icon/native/redesign/generated/KeyIcon.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";
import { UserSettingsAuthedApps } from "../../authorized_apps/native/UserSettingsAuthedApps.tsx";

const obj = {
  route: ME.UserSettingsSections.AUTHORIZED_APPS,
  getComponent() {
    return UserSettingsAuthedApps /* UserSettingsAuthedApps */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/AuthorizedAppsSetting.tsx");

export default route;