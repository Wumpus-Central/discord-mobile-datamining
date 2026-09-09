// === Module 15000: ClipsSetting ===

// Module 15000 (ClipsSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import ClipsIcon from "ClipsIcon" /* 15001 */;
import SettingBuilders from "SettingBuilders" /* 11500 */;
import size from "module_2" /* 2 */;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.z2jK6X);
  },
  parent: null,
  IconComponent: ClipsIcon.ClipsIcon,
  screen: {
    route: Constants.UserSettingsSections.CLIPS,
    getComponent() {
      return require("SettingsClipsScreen").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ClipsSetting.tsx");

export default route;