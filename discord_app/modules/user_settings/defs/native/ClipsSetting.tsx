// === Module 14088: route ===

// Module 14088 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.z2jK6X);
  },
  parent: null,
  IconComponent: require("ClipsIcon").ClipsIcon,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.CLIPS,
  getComponent() {
    return require(14091) /* ClipsSettingsScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/ClipsSetting.tsx");

export default route;