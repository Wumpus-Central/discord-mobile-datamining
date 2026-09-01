// discord_app/modules/user_settings/defs/native/DesignSystemSheetsSetting.tsx
import set from "../../../../../_runtime/00002_set.js";
import ME from "../../../../Constants.tsx";
import MobileUserSettings from "../../core/native/SettingsConstants.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";
import { DemoActionSheet } from "../../design_system/native/UserSettingsDesignSystemSheets.tsx";

obj = {
  useTitle() {
    return "Sheets";
  },
  parent: MobileUserSettings.MobileUserSettings.DESIGN_SYSTEMS,
  screen: obj,
};
obj = {
  route: ME.UserSettingsSections.DESIGN_SYSTEM_SHEETS,
  getComponent() {
    return DemoActionSheet /* DemoActionSheet */.default;
  },
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemSheetsSetting.tsx");

export default route;
