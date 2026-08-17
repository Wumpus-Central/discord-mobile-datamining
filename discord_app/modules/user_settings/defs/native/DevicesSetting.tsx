// discord_app/modules/user_settings/defs/native/DevicesSetting.tsx
import set from "../../../../../_runtime/00002_set.js";
import ME from "../../../../Constants.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import LaptopPhoneIcon from "../../../../design/components/Icon/native/redesign/generated/LaptopPhoneIcon.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";
import { UserSettingsSessions } from "../../devices/native/UserSettingsSessions.tsx";

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["+1h0k/"]);
  },
  parent: null,
  IconComponent: LaptopPhoneIcon.LaptopPhoneIcon,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.SESSIONS,
  getComponent() {
    return UserSettingsSessions.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/DevicesSetting.tsx");

export default route;