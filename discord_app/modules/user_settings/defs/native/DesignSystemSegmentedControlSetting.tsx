// discord_app/modules/user_settings/defs/native/DesignSystemSegmentedControlSetting.tsx
import set from "../../../../../_runtime/00002_set.js";
import ME from "../../../../Constants.tsx";
import MobileUserSettings from "../../core/native/SettingsConstants.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";
import { UserSettingsDesignSystemSegmentedControl } from "../../design_system/native/UserSettingsDesignSystemSegmentedControl.tsx";

obj = {
  useTitle() {
    return "Segmented Control";
  },
  parent: MobileUserSettings.MobileUserSettings.DESIGN_SYSTEMS,
  screen: obj,
};
obj = {
  route: ME.UserSettingsSections.DESIGN_SYSTEM_SEGMENTED_CONTROL,
  getComponent() {
    return UserSettingsDesignSystemSegmentedControl /* UserSettingsDesignSystemSegmentedControl */.default;
  },
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemSegmentedControlSetting.tsx");

export default route;
