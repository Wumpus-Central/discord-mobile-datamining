// === Module 14664: ConnectionsSetting ===

// Module 14664 (ConnectionsSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import PuzzlePieceIcon from "PuzzlePieceIcon" /* 14665 */;
import SettingBuilders from "SettingBuilders" /* 11175 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["3fe7U5"]);
  },
  parent: null,
  IconComponent: PuzzlePieceIcon.PuzzlePieceIcon,
  screen: {
    route: Constants.UserSettingsSections.CONNECTIONS,
    getComponent() {
      return require("ConnectionsSettingScreen").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ConnectionsSetting.tsx");

export default route;