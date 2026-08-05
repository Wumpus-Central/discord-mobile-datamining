// discord_app/modules/user_settings/defs/native/ClipsSetting.tsx
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.z2jK6X);
  },
  parent: null,
  IconComponent: require("ClipsIcon").ClipsIcon,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.CLIPS,
  getComponent() {
    return require("../../clips/native/SettingsClipsScreen.tsx") /* ClipsSettingsScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/ClipsSetting.tsx");

export default route;