// === Module 15519: ChatSetting ===

// Module 15519 (ChatSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import ImageTextIcon from "ImageTextIcon" /* 15520 */;
import SettingBuilders from "SettingBuilders" /* 11562 */;
import size from "module_2" /* 2 */;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["/VQax8"]);
  },
  parent: null,
  IconComponent: ImageTextIcon.ImageTextIcon,
  screen: {
    route: Constants.UserSettingsSections.TEXT,
    getComponent() {
      return require("SettingsChatScreen").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ChatSetting.tsx");

export default route;