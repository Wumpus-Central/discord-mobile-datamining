// discord_app/modules/user_settings/defs/native/DesignSystemSegmentedControlSetting.tsx
import createToggle from "createToggle";
import { UserSettingsDesignSystemSegmentedControl } from "../../design_system/native/UserSettingsDesignSystemSegmentedControl.tsx";

obj = {
  useTitle() {
    return "Segmented Control";
  },
  parent: require("MobileUserSettings").MobileUserSettings.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.DESIGN_SYSTEM_SEGMENTED_CONTROL,
  getComponent() {
    return UserSettingsDesignSystemSegmentedControl.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemSegmentedControlSetting.tsx");

export default route;