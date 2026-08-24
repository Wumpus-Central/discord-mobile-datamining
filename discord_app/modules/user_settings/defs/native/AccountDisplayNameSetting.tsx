// discord_app/modules/user_settings/defs/native/AccountDisplayNameSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import closure_2 from "../../../../stores/UserStore.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";
import { ProfileCustomizationSubsection } from "../../profiles/native/ProfileCustomizationSettingScreen.tsx";

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["9AjdkD"]);
  },
  parent: require("MobileUserSettings").MobileUserSettings.ACCOUNT,
  useTrailing: function useAccountDisplayNameSettingTrailing() {
    const items = [closure_2];
    return initialize.useStateFromStores(items, () => {
      currentUser = currentUser.getCurrentUser();
      let globalName;
      if (currentUser != null) {
        globalName = currentUser.globalName;
      }
      return globalName;
    });
  },
  screen: createToggle
};
createToggle = {
  route: require("ME").UserSettingsSections.PROFILE_CUSTOMIZATION,
  getComponent() {
    return ProfileCustomizationSubsection.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/AccountDisplayNameSetting.tsx");

export default createToggle;