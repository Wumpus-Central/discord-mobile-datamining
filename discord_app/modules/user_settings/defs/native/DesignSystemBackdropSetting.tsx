// discord_app/modules/user_settings/defs/native/DesignSystemBackdropSetting.tsx
import set from "../../../../../_runtime/00002_set.js";
import ME from "../../../../Constants.tsx";
import MobileUserSettings from "../../core/native/SettingsConstants.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";
import { BackdropCard } from "../../design_system/native/UserSettingsDesignSystemBackdrop.tsx";

obj = {
  useTitle() {
    return "Backdrop";
  },
  parent: MobileUserSettings.MobileUserSettings.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.DESIGN_SYSTEM_BACKDROP,
  getComponent() {
    return BackdropCard /* BackdropCard */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemBackdropSetting.tsx");

export default route;