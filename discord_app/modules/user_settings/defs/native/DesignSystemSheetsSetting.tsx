// discord_app/modules/user_settings/defs/native/DesignSystemSheetsSetting.tsx
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import MobileUserSettings from "MobileUserSettings" /* 8198 */;
import createToggle from "createToggle" /* 10669 */;
import { DemoActionSheet } from "../../design_system/native/UserSettingsDesignSystemSheets.tsx";

obj = {
  useTitle() {
    return "Sheets";
  },
  parent: MobileUserSettings.MobileUserSettings.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.DESIGN_SYSTEM_SHEETS,
  getComponent() {
    return DemoActionSheet.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemSheetsSetting.tsx");

export default route;