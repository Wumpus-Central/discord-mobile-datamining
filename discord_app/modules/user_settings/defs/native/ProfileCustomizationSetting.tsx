// discord_app/modules/user_settings/defs/native/ProfileCustomizationSetting.tsx
import set from "../../../../../_runtime/00002_set.js";
import ME from "../../../../Constants.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";
import { ProfileCustomizationSubsection } from "../../profiles/native/ProfileCustomizationSettingScreen.tsx";

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.LYju5J);
  },
  parent: null,
  unsearchable: true,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.PROFILE_CUSTOMIZATION,
  getComponent() {
    return ProfileCustomizationSubsection /* ProfileCustomizationSubsection */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/ProfileCustomizationSetting.tsx");

export default route;