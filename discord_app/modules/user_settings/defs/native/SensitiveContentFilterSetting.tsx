import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["Hj/But"]);
  },
  IconComponent: require("ImageWarningIcon").ImageWarningIcon,
  parent: require("MobileSetting").MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  screen: obj,
  useSearchTerms() {
    const intl = require(1236) /* getSystemLocale */.intl;
    const items = [intl.string(require(1236) /* getSystemLocale */.t.uEz8JF), , , , , ];
    const intl2 = require(1236) /* getSystemLocale */.intl;
    items[1] = intl2.string(require(1236) /* getSystemLocale */.t["N/oRI+"]);
    const intl3 = require(1236) /* getSystemLocale */.intl;
    items[2] = intl3.string(require(1236) /* getSystemLocale */.t.QVdYsK);
    const intl4 = require(1236) /* getSystemLocale */.intl;
    items[3] = intl4.string(require(1236) /* getSystemLocale */.t["aWD+tu"]);
    const intl5 = require(1236) /* getSystemLocale */.intl;
    items[4] = intl5.string(require(1236) /* getSystemLocale */.t["5mnTa7"]);
    const intl6 = require(1236) /* getSystemLocale */.intl;
    items[5] = intl6.string(require(1236) /* getSystemLocale */.t["K0OWP+"]);
    return items;
  }
};
obj = {
  route: require("ME").UserSettingsSections.SENSITIVE_MEDIA_FILTERS,
  getComponent() {
    return require(13931) /* UserSettingsSensitiveContentFilters */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/SensitiveContentFilterSetting.tsx");

export default route;