// === Module 14797: route ===

// Module 14797 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import PuzzlePieceIcon from "PuzzlePieceIcon" /* 14798 */;
import createToggle from "createToggle" /* 11292 */;

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["3fe7U5"]);
  },
  parent: null,
  IconComponent: PuzzlePieceIcon.PuzzlePieceIcon,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.CONNECTIONS,
  getComponent() {
    return require(14800) /* onPress */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/ConnectionsSetting.tsx");

export default route;