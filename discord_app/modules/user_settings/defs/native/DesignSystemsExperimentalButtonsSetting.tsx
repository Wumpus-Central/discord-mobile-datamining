import { UserSettingsDesignSystemExperimentalButtons } from "../../design_system/native/UserSettingsDesignSystemExperimentalButtons.tsx";
// discord_app/modules/user_settings/defs/native/DesignSystemsExperimentalButtonsSetting.tsx
import createToggle from "createToggle";

obj = {
  useTitle() {
    return "Experimental Buttons";
  },
  parent: require("MobileSetting").MobileSetting.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.DESIGN_SYSTEM_EXPERIMENTAL_BUTTONS,
  getComponent() {
    return UserSettingsDesignSystemExperimentalButtons /* UserSettingsDesignSystemExperimentalButtons */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsExperimentalButtonsSetting.tsx");

export default route;