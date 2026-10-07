// === Module 15793: EncryptionSetting ===

// Module 15793 (EncryptionSetting)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import useSecureFramesVerifiedUsers from "useSecureFramesVerifiedUsers" /* 15794 */;
import SecureFramesPersistedStore from "SecureFramesPersistedStore" /* 9379 */;

require = fn;
fn(558);
const ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
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
  return initialize.useStateFromStores(tmp4, tmp5);
}) : (() => {
  const items = [SecureFramesPersistedStore];
  return initialize.useStateFromStores(items, () => persistentCodesEnabled.getPersistentCodesEnabled());
});
const SettingBuilders = fn(11142);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  const secureFramesVerifiedUserIds = useSecureFramesVerifiedUsers.useSecureFramesVerifiedUserIds();
  if (cResult[0] !== secureFramesVerifiedUserIds.length) {
    const intl = util.intl;
    const obj3 = { count: secureFramesVerifiedUserIds.length };
    const formatToPlainStringResult = intl.formatToPlainString(util.t["6vrePS"], obj3);
    cResult[0] = secureFramesVerifiedUserIds.length;
    cResult[1] = formatToPlainStringResult;
    let tmp4 = formatToPlainStringResult;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (() => {
  const secureFramesVerifiedUserIds = useSecureFramesVerifiedUsers.useSecureFramesVerifiedUserIds();
  const intl = util.intl;
  return intl.formatToPlainString(util.t["6vrePS"], { count: secureFramesVerifiedUserIds.length });
});
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.x8U2eC);
  },
  useDescription: ReactCompilerGating.isReactCompilerEnabled() ? (() => {
    const cResult = c.c(2);
    const secureFramesVerifiedUserIds = useSecureFramesVerifiedUsers.useSecureFramesVerifiedUserIds();
    if (cResult[0] !== secureFramesVerifiedUserIds.length) {
      const intl = util.intl;
      const obj3 = { count: secureFramesVerifiedUserIds.length };
      const formatToPlainStringResult = intl.formatToPlainString(util.t["6vrePS"], obj3);
      cResult[0] = secureFramesVerifiedUserIds.length;
      cResult[1] = formatToPlainStringResult;
      let tmp4 = formatToPlainStringResult;
    } else {
      tmp4 = cResult[1];
    }
    return tmp4;
  }) : (() => {
    const secureFramesVerifiedUserIds = useSecureFramesVerifiedUsers.useSecureFramesVerifiedUserIds();
    const intl = util.intl;
    return intl.formatToPlainString(util.t["6vrePS"], { count: secureFramesVerifiedUserIds.length });
  }),
  parent: fn(7645).MobileUserSettings.DATA_AND_PRIVACY,
  usePredicate: tmp2,
  screen: {
    route: fn(1085).UserSettingsSections.SECURE_FRAMES,
    getComponent() {
      return require("SettingsSecureFramesScreen").default;
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/EncryptionSetting.tsx");

export default route;
export const SecureFramesEncryptionSetting = route;