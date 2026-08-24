// discord_app/modules/user_settings/defs/native/DesignSystemsExperimentalButtonsSetting.tsx
import set from "../../../../../_runtime/00002_set.js";
import ME from "../../../../Constants.tsx";
import MobileUserSettings from "../../core/native/SettingsConstants.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";
import { UserSettingsDesignSystemExperimentalButtons } from "../../design_system/native/UserSettingsDesignSystemExperimentalButtons.tsx";

obj = {
  useTitle() {
    return "Experimental Buttons";
  },
  parent: MobileUserSettings.MobileUserSettings.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.DESIGN_SYSTEM_EXPERIMENTAL_BUTTONS,
  getComponent() {
    return UserSettingsDesignSystemExperimentalButtons /* UserSettingsDesignSystemExperimentalButtons */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsExperimentalButtonsSetting.tsx");

export default route;