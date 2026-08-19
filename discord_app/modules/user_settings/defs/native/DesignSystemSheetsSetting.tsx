// discord_app/modules/user_settings/defs/native/DesignSystemSheetsSetting.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import ME from "../../../../Constants.tsx";
import MobileUserSettings from "../../core/native/SettingsConstants.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";
import { DemoActionSheet } from "../../design_system/native/UserSettingsDesignSystemSheets.tsx";

const obj = {
  route: ME.UserSettingsSections.DESIGN_SYSTEM_SHEETS,
  getComponent() {
    return DemoActionSheet /* DemoActionSheet */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemSheetsSetting.tsx");

export default route;