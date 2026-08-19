// discord_app/modules/user_settings/defs/native/AuthorizedAppSetting.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import ME from "../../../../Constants.tsx";
import MobileUserSettings from "../../core/native/SettingsConstants.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";
import { AuthorizedAppScreen } from "../../authorized_apps/native/AuthorizedAppScreen.tsx";

const obj = {
  route: ME.UserSettingsSections.AUTHORIZED_APP,
  getComponent() {
    return AuthorizedAppScreen /* AuthorizedAppScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/AuthorizedAppSetting.tsx");

export default route;