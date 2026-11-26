// === Module 16945: DisplayNameStylesRouteSetting ===

// Module 16945 (DisplayNameStylesRouteSetting)
import Constants from "Constants" /* 1071 */;
import util from "util" /* 1112 */;
import _modDef3303 from "module_3303" /* 3303 */;
import SettingBuilders from "SettingBuilders" /* 11962 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3303.ZPMAlX);
  },
  parent: null,
  unsearchable: true,
  screen: {
    route: Constants.UserSettingsSections.DISPLAY_NAME_STYLES,
    getComponent() {
      return require("DisplayNameStylesEditScreen").default;
    }
  },
  usePredicate() {
    return true;
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DisplayNameStylesRouteSetting.tsx");

export default route;