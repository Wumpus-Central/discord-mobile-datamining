// === Module 14126: route ===

// Module 14126 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import messagesProxyDefault from "messagesProxy" /* 2853 */;
import useAgeVerificationRunner from "useAgeVerificationRunner" /* 4992 */;
import MobileUserSettings from "MobileUserSettings" /* 8198 */;
import createToggle from "createToggle" /* 10669 */;

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
    return require(14127) /* SettingsAgeGroupHeader */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/AccountAgeGroupAssignedAdultSetting.tsx");

export default route;