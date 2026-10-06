// discord_app/modules/user_settings/defs/native/DisplayNameStylesRouteSetting.tsx
import Constants from "../../../../Constants.tsx";
import intl2 from "../../../../intl/index.native.tsx";
import _modDef2911 from "../../../display_name_styles/intl/DisplayNameStyles.messages.js";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2911.ZPMAlX);
  },
  parent: null,
  unsearchable: true,
  screen: {
    route: UserSettingsSections.DISPLAY_NAME_STYLES,
    getComponent() {
      return require("DisplayNameStylesEditScreen").default;
    },
  },
  usePredicate() {
    return true;
  },
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DisplayNameStylesRouteSetting.tsx");

export default route;
