// discord_app/modules/user_settings/defs/native/DesignSystemsTableRowSetting.tsx
import set from "../../../../../_runtime/00002_set.js";
import ME from "../../../../Constants.tsx";
import MobileUserSettings from "../../core/native/SettingsConstants.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";
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
    return MyTableRow /* MyTableRow */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsTableRowSetting.tsx");

export default route;