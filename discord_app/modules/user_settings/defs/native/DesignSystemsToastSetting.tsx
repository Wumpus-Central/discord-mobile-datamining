// discord_app/modules/user_settings/defs/native/DesignSystemsToastSetting.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import ME from "../../../../Constants.tsx";
import MobileUserSettings from "../../core/native/SettingsConstants.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";
import { UserSettingsDesignSystemToast } from "../../design_system/native/UserSettingsDesignSystemToast.tsx";

const obj = {
  route: ME.UserSettingsSections.DESIGN_SYSTEM_TOAST,
  getComponent() {
    return UserSettingsDesignSystemToast /* UserSettingsDesignSystemToast */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsToastSetting.tsx");

export default route;