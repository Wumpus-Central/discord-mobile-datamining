// discord_app/modules/user_settings/defs/native/DesignSystemsTableRowSetting.tsx
import createToggle from "createToggle";
import { MyTableRow } from "../../design_system/native/UserSettingsDesignSystemTableRow.tsx";

obj = {
  useTitle() {
    return "Table Row";
  },
  parent: require("MobileSetting").MobileSetting.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.DESIGN_SYSTEM_TABLE_ROW,
  getComponent() {
    return MyTableRow /* MyTableRow */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsTableRowSetting.tsx");

export default route;