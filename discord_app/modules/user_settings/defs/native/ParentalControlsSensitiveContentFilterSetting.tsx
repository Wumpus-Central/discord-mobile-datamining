// discord_app/modules/user_settings/defs/native/ParentalControlsSensitiveContentFilterSetting.tsx
import createToggle from "createToggle";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { UserSettingsSensitiveContentFilters } from "../../family_center/native/ParentalControlsSensitiveContentFiltersScreen.tsx";

obj = {
  useTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t["Hj/But"]);
  },
  IconComponent: require("ImageWarningIcon").ImageWarningIcon,
  parent: require("MobileSetting").MobileSetting.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  screen: obj,
  unsearchable: true
};
obj = {
  route: require("ME").UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS_SENSITIVE_CONTENT_FILTERS,
  getComponent() {
    return UserSettingsSensitiveContentFilters /* UserSettingsSensitiveContentFilters */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsSensitiveContentFilterSetting.tsx");

export default route;