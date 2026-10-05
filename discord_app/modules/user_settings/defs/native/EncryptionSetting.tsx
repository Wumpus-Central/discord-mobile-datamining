// === Module 15757: EncryptionSetting ===

// Module 15757 (EncryptionSetting)
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import SettingsConstants from "SettingsConstants" /* 7634 */;
import useSecureFramesVerifiedUsers from "useSecureFramesVerifiedUsers" /* 15758 */;
import SecureFramesPersistedStore from "SecureFramesPersistedStore" /* 9365 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11129 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let persistentCodesEnabled;
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SecureFramesPersistedStore];
    const fn = function s() {
      return persistentCodesEnabled.getPersistentCodesEnabled();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStores(tmp4, tmp5);
}) : (() => {
  let persistentCodesEnabled;
  const items = [SecureFramesPersistedStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => persistentCodesEnabled.getPersistentCodesEnabled());
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp4;
  const obj = react;
  const cResult = obj.c(2);
  const obj2 = useSecureFramesVerifiedUsers;
  const secureFramesVerifiedUserIds = obj2.useSecureFramesVerifiedUserIds();
  if (cResult[0] !== secureFramesVerifiedUserIds.length) {
    const intl = intl2.intl;
    const obj3 = { count: secureFramesVerifiedUserIds.length };
    const formatToPlainStringResult = intl.formatToPlainString(intl2.t["6vrePS"], obj3);
    cResult[0] = secureFramesVerifiedUserIds.length;
    cResult[1] = formatToPlainStringResult;
    tmp4 = formatToPlainStringResult;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (() => {
  const obj = useSecureFramesVerifiedUsers;
  const secureFramesVerifiedUserIds = obj.useSecureFramesVerifiedUserIds();
  const intl = intl2.intl;
  const obj2 = { count: secureFramesVerifiedUserIds.length };
  return intl.formatToPlainString(intl2.t["6vrePS"], obj2);
});
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.x8U2eC);
  },
  useDescription: tmp3,
  parent: MobileUserSettings.DATA_AND_PRIVACY,
  usePredicate: tmp2,
  screen: {
    route: UserSettingsSections.SECURE_FRAMES,
    getComponent() {
      return require("SettingsSecureFramesScreen").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/EncryptionSetting.tsx");

export default route;
export const SecureFramesEncryptionSetting = route;