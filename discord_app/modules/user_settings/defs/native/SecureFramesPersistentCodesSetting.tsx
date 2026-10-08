// === Module 16055: SecureFramesPersistentCodesSetting ===

// Module 16055 (SecureFramesPersistentCodesSetting)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import updatePersistentCodesEnabled from "updatePersistentCodesEnabled" /* 16056 */;
import SecureFramesPersistedStore from "SecureFramesPersistedStore" /* 5129 */;

require = fn;
const ReactCompilerGating = fn(558);
const SettingBuilders = fn(11262);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSecureFramesPersistentCodesValue() {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SecureFramesPersistedStore];
    const fn = function n() {
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
}) : (function useSecureFramesPersistentCodesValue() {
  const items = [SecureFramesPersistedStore];
  return initialize.useStateFromStores(items, () => persistentCodesEnabled.getPersistentCodesEnabled());
});
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["opi/XK"]);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(util.t.opw5ls);
  },
  parent: fn(7966).MobileUserSettings.DATA_AND_PRIVACY,
  useValue: ReactCompilerGating.isReactCompilerEnabled() ? (function useSecureFramesPersistentCodesValue() {
    const cResult = c.c(2);
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [SecureFramesPersistedStore];
      const fn = function n() {
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
  }) : (function useSecureFramesPersistentCodesValue() {
    const items = [SecureFramesPersistedStore];
    return initialize.useStateFromStores(items, () => persistentCodesEnabled.getPersistentCodesEnabled());
  }),
  onValueChange: function handleSecureFramesPersistentCodesToggle(arg0) {
    const result = updatePersistentCodesEnabled.updatePersistentCodesEnabled(arg0);
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/SecureFramesPersistentCodesSetting.tsx");

export default toggle;
export const DataAndPrivacySecureFramesPersistentCodesSetting = toggle;