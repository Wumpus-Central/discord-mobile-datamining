// discord_app/modules/user_settings/defs/native/ProfileCustomizationSetting.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import ME from "../../../../Constants.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";
import { ProfileCustomizationSubsection } from "../../profiles/native/ProfileCustomizationSettingScreen.tsx";

const obj = {
  route: ME.UserSettingsSections.PROFILE_CUSTOMIZATION,
  getComponent() {
    return ProfileCustomizationSubsection /* ProfileCustomizationSubsection */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/ProfileCustomizationSetting.tsx");

export default route;