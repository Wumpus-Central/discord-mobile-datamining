// discord_app/modules/user_settings/defs/native/SensitiveContentFilterSetting.tsx
import createToggle from "createToggle";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { UserSettingsSensitiveContentFilters } from "../../content_and_social/native/SensitiveContentFiltersScreen.tsx";

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["Hj/But"]);
  },
  IconComponent: require("ImageWarningIcon").ImageWarningIcon,
  parent: require("MobileUserSettings").MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  screen: obj,
  useSearchTerms() {
    const intl = getSystemLocale.intl;
    const items = [intl.string(getSystemLocale.t.uEz8JF), , , , , ];
    const intl2 = getSystemLocale.intl;
    items[1] = intl2.string(getSystemLocale.t["N/oRI+"]);
    const intl3 = getSystemLocale.intl;
    items[2] = intl3.string(getSystemLocale.t.QVdYsK);
    const intl4 = getSystemLocale.intl;
    items[3] = intl4.string(getSystemLocale.t["aWD+tu"]);
    const intl5 = getSystemLocale.intl;
    items[4] = intl5.string(getSystemLocale.t["5mnTa7"]);
    const intl6 = getSystemLocale.intl;
    items[5] = intl6.string(getSystemLocale.t["K0OWP+"]);
    return items;
  }
};
obj = {
  route: require("ME").UserSettingsSections.SENSITIVE_MEDIA_FILTERS,
  getComponent() {
    return UserSettingsSensitiveContentFilters.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/SensitiveContentFilterSetting.tsx");

export default route;