// discord_app/modules/user_settings/defs/native/AccountDisplayNameSetting.tsx
import mergeGuildAvatar from "mergeGuildAvatar";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["9AjdkD"]);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT,
  useTrailing: function useAccountDisplayNameSettingTrailing() {
    const items = [mergeGuildAvatar];
    return require("../../../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStores(items, () => {
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
    return require("../../profiles/native/ProfileCustomizationSettingScreen.tsx") /* ProfileCustomizationSubsection */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("ME").fileFinishedImporting("modules/user_settings/defs/native/AccountDisplayNameSetting.tsx");

export default createToggle;