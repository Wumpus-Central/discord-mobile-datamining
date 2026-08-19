// === Module 14310: route ===

// Module 14310 (route)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import PuzzlePieceIcon from "PuzzlePieceIcon" /* 14311 */;
import createToggle from "createToggle" /* 10669 */;

const obj = {
  route: ME.UserSettingsSections.CONNECTIONS,
  getComponent() {
    return require(14313) /* onPress */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/ConnectionsSetting.tsx");

export default route;