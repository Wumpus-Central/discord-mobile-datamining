// discord_app/modules/user_settings/defs/native/DesignSystemBackdropSetting.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import ME from "../../../../Constants.tsx";
import MobileUserSettings from "../../core/native/SettingsConstants.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";
import { BackdropCard } from "../../design_system/native/UserSettingsDesignSystemBackdrop.tsx";

const obj = {
  route: ME.UserSettingsSections.DESIGN_SYSTEM_BACKDROP,
  getComponent() {
    return BackdropCard /* BackdropCard */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemBackdropSetting.tsx");

export default route;