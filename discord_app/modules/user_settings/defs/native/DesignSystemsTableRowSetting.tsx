// discord_app/modules/user_settings/defs/native/DesignSystemsTableRowSetting.tsx
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import MobileUserSettings from "MobileUserSettings" /* 8198 */;
import createToggle from "createToggle" /* 10669 */;
import { MyTableRow } from "../../design_system/native/UserSettingsDesignSystemTableRow.tsx";

obj = {
  useTitle() {
    return "Table Row";
  },
  parent: MobileUserSettings.MobileUserSettings.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.DESIGN_SYSTEM_TABLE_ROW,
  getComponent() {
    return MyTableRow.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsTableRowSetting.tsx");

export default route;