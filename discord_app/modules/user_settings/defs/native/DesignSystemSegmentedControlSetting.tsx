// discord_app/modules/user_settings/defs/native/DesignSystemSegmentedControlSetting.tsx
import createToggle from "createToggle";

obj = {
  useTitle() {
    return "Segmented Control";
  },
  parent: require("MobileSetting").MobileSetting.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.DESIGN_SYSTEM_SEGMENTED_CONTROL,
  getComponent() {
    return require(14589) /* UserSettingsDesignSystemSegmentedControl */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemSegmentedControlSetting.tsx");

export default route;