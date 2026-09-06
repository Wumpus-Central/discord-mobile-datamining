// discord_app/modules/user_settings/defs/native/DesignSystemsAlertModalSetting.tsx
import Constants from "../../../../Constants.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const route = SettingBuilders.createRoute({
  useTitle() {
    return "Alert Modal";
  },
  parent: SettingsConstants.MobileUserSettings.DESIGN_SYSTEMS,
  screen: {
    route: Constants.UserSettingsSections.DESIGN_SYSTEM_ALERT_MODAL,
    getComponent() {
      return require("UserSettingsDesignSystemAlertModal").default;
    },
  },
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsAlertModalSetting.tsx");

export default route;
