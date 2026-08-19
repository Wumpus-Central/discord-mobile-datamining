// discord_app/modules/user_settings/defs/native/DevicesSetting.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import ME from "../../../../Constants.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import LaptopPhoneIcon from "../../../../design/components/Icon/native/redesign/generated/LaptopPhoneIcon.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";
import { UserSettingsSessions } from "../../devices/native/UserSettingsSessions.tsx";

const obj = {
  route: ME.UserSettingsSections.SESSIONS,
  getComponent() {
    return UserSettingsSessions /* UserSettingsSessions */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/DevicesSetting.tsx");

export default route;