// discord_app/modules/user_settings/defs/native/DesignSystemsRowButtonSetting.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import ME from "../../../../Constants.tsx";
import MobileUserSettings from "../../core/native/SettingsConstants.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";
import { UserSettingsDesignSystemRowButton } from "../../design_system/native/UserSettingsDesignSystemRowButton.tsx";

const obj = {
  route: ME.UserSettingsSections.DESIGN_SYSTEM_ROW_BUTTON,
  getComponent() {
    return UserSettingsDesignSystemRowButton /* UserSettingsDesignSystemRowButton */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsRowButtonSetting.tsx");

export default route;