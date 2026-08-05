// discord_app/modules/user_settings/defs/native/DesignSystemSheetsSetting.tsx
import createToggle from "createToggle";
import { DemoActionSheet } from "../../design_system/native/UserSettingsDesignSystemSheets.tsx";

obj = {
  useTitle() {
    return "Sheets";
  },
  parent: require("MobileSetting").MobileSetting.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.DESIGN_SYSTEM_SHEETS,
  getComponent() {
    return DemoActionSheet.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemSheetsSetting.tsx");

export default route;