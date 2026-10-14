// discord_app/modules/user_settings/defs/native/DesignSystemBadgeSetting.tsx
import Constants from "../../../../Constants.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    return "Badge";
  },
  parent: SettingsConstants.MobileUserSettings.DESIGN_SYSTEMS,
  screen: {
    route: Constants.UserSettingsSections.DESIGN_SYSTEM_BADGE,
    getComponent() {
      return require("UserSettingsDesignSystemBadge").default;
    },
  },
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemBadgeSetting.tsx");

export default route;
