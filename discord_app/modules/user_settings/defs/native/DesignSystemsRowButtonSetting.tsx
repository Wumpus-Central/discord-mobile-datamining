// discord_app/modules/user_settings/defs/native/DesignSystemsRowButtonSetting.tsx
import createToggle from "createToggle";
import { UserSettingsDesignSystemRowButton } from "../../design_system/native/UserSettingsDesignSystemRowButton.tsx";

obj = {
  useTitle() {
    return "Row Button";
  },
  parent: require("MobileSetting").MobileSetting.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.DESIGN_SYSTEM_ROW_BUTTON,
  getComponent() {
    return UserSettingsDesignSystemRowButton.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsRowButtonSetting.tsx");

export default route;