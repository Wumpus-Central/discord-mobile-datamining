// discord_app/modules/user_settings/defs/native/DevicesSetting.tsx
import Constants from "../../../../Constants.tsx";
import util from "../../../../intl/index.native.tsx";
import LaptopPhoneIcon from "../../../../design/components/Icon/native/redesign/generated/LaptopPhoneIcon.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["+1h0k/"]);
  },
  parent: null,
  IconComponent: LaptopPhoneIcon.LaptopPhoneIcon,
  screen: {
    route: Constants.UserSettingsSections.SESSIONS,
    getComponent() {
      return require("UserSettingsSessions").default;
    },
  },
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DevicesSetting.tsx");

export default route;
