// discord_app/modules/user_settings/defs/native/ParentalControlsSensitiveContentFilterSetting.tsx
import Constants from "../../../../Constants.tsx";
import util from "../../../../intl/index.native.tsx";
import ImageWarningIcon from "../../../../design/components/Icon/native/redesign/generated/ImageWarningIcon.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["Hj/But"]);
  },
  IconComponent: ImageWarningIcon.ImageWarningIcon,
  parent: SettingsConstants.MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  screen: {
    route: Constants.UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS_SENSITIVE_CONTENT_FILTERS,
    getComponent() {
      return require("ParentalControlsSensitiveContentFiltersScreen").default;
    },
  },
  unsearchable: true,
});
const result = size.fileFinishedImporting(
  "modules/user_settings/defs/native/ParentalControlsSensitiveContentFilterSetting.tsx",
);

export default route;
