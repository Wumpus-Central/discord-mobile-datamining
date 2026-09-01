// discord_app/modules/user_settings/defs/native/AuthorizedAppSetting.tsx
import set from "../../../../../_runtime/00002_set.js";
import ME from "../../../../Constants.tsx";
import MobileUserSettings from "../../core/native/SettingsConstants.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";
import { AuthorizedAppScreen } from "../../authorized_apps/native/AuthorizedAppScreen.tsx";

obj = {
  useTitle() {
    return "";
  },
  parent: MobileUserSettings.MobileUserSettings.AUTHORIZED_APPS,
  unsearchable: true,
  screen: obj,
};
obj = {
  route: ME.UserSettingsSections.AUTHORIZED_APP,
  getComponent() {
    return AuthorizedAppScreen /* AuthorizedAppScreen */.default;
  },
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/AuthorizedAppSetting.tsx");

export default route;
