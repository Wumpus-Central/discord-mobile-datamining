// discord_app/modules/user_settings/defs/native/ContentAndSocialSetting.tsx
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["+o1pDZ"]);
  },
  parent: null,
  IconComponent: require("FriendsIcon").FriendsIcon,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.CONTENT_AND_SOCIAL,
  getComponent() {
    return require("../../content_and_social/native/ContentAndSocialScreen.tsx") /* ContentAndSocialSettings */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/ContentAndSocialSetting.tsx");

export default route;