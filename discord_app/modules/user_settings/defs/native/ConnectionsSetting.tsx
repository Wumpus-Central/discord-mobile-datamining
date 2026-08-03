// === Module 14070: route ===

// Module 14070 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["3fe7U5"]);
  },
  parent: null,
  IconComponent: require("PuzzlePieceIcon").PuzzlePieceIcon,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.CONNECTIONS,
  getComponent() {
    return require(14073) /* onPress */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/ConnectionsSetting.tsx");

export default route;