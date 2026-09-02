// === Module 14598: route ===

// Module 14598 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import messagesProxyDefault from "messagesProxy" /* 2918 */;
import useAgeVerificationRunner from "useAgeVerificationRunner" /* 4733 */;
import MobileUserSettings from "MobileUserSettings" /* 7893 */;
import createToggle from "createToggle" /* 11288 */;

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.piqs0o);
  },
  parent: MobileUserSettings.MobileUserSettings.ACCOUNT,
  useTrailing() {
    const intl = getSystemLocale.intl;
    const intl2 = getSystemLocale.intl;
    return "" + intl.string(getSystemLocale.t.XxRj7f) + " \u2022 " + intl2.string(messagesProxyDefault.FTawSP);
  },
  usePredicate: useAgeVerificationRunner.useShowAssignedAgeGroupSettings,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.AGE_GROUP,
  getComponent() {
    return require(14599) /* SettingsAgeGroupHeader */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/AccountAgeGroupAssignedAdultSetting.tsx");

export default route;