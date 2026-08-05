// discord_app/modules/user_settings/defs/native/AccountDisplayNameSetting.tsx
import mergeGuildAvatar from "mergeGuildAvatar";
import createToggle from "createToggle";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { ProfileCustomizationSubsection } from "../../profiles/native/ProfileCustomizationSettingScreen.tsx";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t["9AjdkD"]);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT,
  useTrailing: function useAccountDisplayNameSettingTrailing() {
    const items = [mergeGuildAvatar];
    return initialize /* initialize */.useStateFromStores(items, () => {
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
    return ProfileCustomizationSubsection /* ProfileCustomizationSubsection */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("ME").fileFinishedImporting("modules/user_settings/defs/native/AccountDisplayNameSetting.tsx");

export default createToggle;