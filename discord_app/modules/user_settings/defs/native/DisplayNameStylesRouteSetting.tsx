// discord_app/modules/user_settings/defs/native/DisplayNameStylesRouteSetting.tsx
import Constants from "../../../../Constants.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef2786 from "../../../display_name_styles/intl/DisplayNameStyles.messages.js";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2786.ZPMAlX);
  },
  parent: null,
  unsearchable: true,
  screen: {
    route: Constants.UserSettingsSections.DISPLAY_NAME_STYLES,
    getComponent() {
      return require("DisplayNameStylesEditScreen").default;
    },
  },
  usePredicate() {
    return true;
  },
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DisplayNameStylesRouteSetting.tsx");

export default route;
