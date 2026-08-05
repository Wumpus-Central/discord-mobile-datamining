// discord_app/modules/user_settings/defs/native/SensitiveContentFilterSetting.tsx
import createToggle from "createToggle";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { UserSettingsSensitiveContentFilters } from "../../content_and_social/native/SensitiveContentFiltersScreen.tsx";

obj = {
  useTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t["Hj/But"]);
  },
  IconComponent: require("ImageWarningIcon").ImageWarningIcon,
  parent: require("MobileSetting").MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  screen: obj,
  useSearchTerms() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    const items = [intl.string(getSystemLocale /* getSystemLocale */.t.uEz8JF), , , , , ];
    const intl2 = getSystemLocale /* getSystemLocale */.intl;
    items[1] = intl2.string(getSystemLocale /* getSystemLocale */.t["N/oRI+"]);
    const intl3 = getSystemLocale /* getSystemLocale */.intl;
    items[2] = intl3.string(getSystemLocale /* getSystemLocale */.t.QVdYsK);
    const intl4 = getSystemLocale /* getSystemLocale */.intl;
    items[3] = intl4.string(getSystemLocale /* getSystemLocale */.t["aWD+tu"]);
    const intl5 = getSystemLocale /* getSystemLocale */.intl;
    items[4] = intl5.string(getSystemLocale /* getSystemLocale */.t["5mnTa7"]);
    const intl6 = getSystemLocale /* getSystemLocale */.intl;
    items[5] = intl6.string(getSystemLocale /* getSystemLocale */.t["K0OWP+"]);
    return items;
  }
};
obj = {
  route: require("ME").UserSettingsSections.SENSITIVE_MEDIA_FILTERS,
  getComponent() {
    return UserSettingsSensitiveContentFilters /* UserSettingsSensitiveContentFilters */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/SensitiveContentFilterSetting.tsx");

export default route;