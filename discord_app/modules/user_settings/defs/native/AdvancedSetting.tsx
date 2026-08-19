// discord_app/modules/user_settings/defs/native/AdvancedSetting.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import ME from "../../../../Constants.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import SettingsIcon from "../../../../design/components/Icon/native/redesign/generated/SettingsIcon.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";

const obj = {
  route: ME.UserSettingsSections.ADVANCED,
  getComponent() {
    return require("../../advanced/native/SettingsAdvancedScreen.tsx").default;
  }
};
const route = createToggle.createRoute(obj);
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/AdvancedSetting.tsx");

export default route;