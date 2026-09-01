// discord_app/modules/user_settings/defs/native/DesignSystemsTextSetting.tsx
import set from "../../../../../_runtime/00002_set.js";
import ME from "../../../../Constants.tsx";
import MobileUserSettings from "../../core/native/SettingsConstants.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";
import { UserSettingsDesignSystemText } from "../../design_system/native/UserSettingsDesignSystemText.tsx";

obj = {
  useTitle() {
    return "Text";
  },
  parent: MobileUserSettings.MobileUserSettings.DESIGN_SYSTEMS,
  screen: obj,
};
obj = {
  route: ME.UserSettingsSections.DESIGN_SYSTEM_TEXT,
  getComponent() {
    return UserSettingsDesignSystemText /* UserSettingsDesignSystemText */.default;
  },
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsTextSetting.tsx");

export default route;
