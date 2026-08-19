// discord_app/modules/user_settings/defs/native/SensitiveContentFilterSetting.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import ME from "../../../../Constants.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import ImageWarningIcon from "../../../../design/components/Icon/native/redesign/generated/ImageWarningIcon.tsx";
import MobileUserSettings from "../../core/native/SettingsConstants.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";
import { UserSettingsSensitiveContentFilters } from "../../content_and_social/native/SensitiveContentFiltersScreen.tsx";

const obj = {
  route: ME.UserSettingsSections.SENSITIVE_MEDIA_FILTERS,
  getComponent() {
    return UserSettingsSensitiveContentFilters /* UserSettingsSensitiveContentFilters */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/SensitiveContentFilterSetting.tsx");

export default route;