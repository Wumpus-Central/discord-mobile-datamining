// discord_app/modules/user_settings/defs/native/DesignSystemsExperimentalButtonsSetting.tsx
import createToggle from "createToggle";
import { UserSettingsDesignSystemExperimentalButtons } from "../../design_system/native/UserSettingsDesignSystemExperimentalButtons.tsx";

obj = {
  useTitle() {
    return "Experimental Buttons";
  },
  parent: require("MobileUserSettings").MobileUserSettings.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.DESIGN_SYSTEM_EXPERIMENTAL_BUTTONS,
  getComponent() {
    return UserSettingsDesignSystemExperimentalButtons.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsExperimentalButtonsSetting.tsx");

export default route;