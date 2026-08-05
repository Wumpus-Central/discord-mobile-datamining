// discord_app/modules/user_settings/defs/native/SensitiveContentFilterSetting.tsx
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["Hj/But"]);
  },
  IconComponent: require("ImageWarningIcon").ImageWarningIcon,
  parent: require("MobileSetting").MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  screen: obj,
  useSearchTerms() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    const items = [intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.uEz8JF), , , , , ];
    const intl2 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    items[1] = intl2.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["N/oRI+"]);
    const intl3 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    items[2] = intl3.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.QVdYsK);
    const intl4 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    items[3] = intl4.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["aWD+tu"]);
    const intl5 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    items[4] = intl5.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["5mnTa7"]);
    const intl6 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    items[5] = intl6.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["K0OWP+"]);
    return items;
  }
};
obj = {
  route: require("ME").UserSettingsSections.SENSITIVE_MEDIA_FILTERS,
  getComponent() {
    return require("../../content_and_social/native/SensitiveContentFiltersScreen.tsx") /* UserSettingsSensitiveContentFilters */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/SensitiveContentFilterSetting.tsx");

export default route;