// === Module 15349: AndroidMobileOverlaySetting ===

// Module 15349 (AndroidMobileOverlaySetting)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import MobileVoiceOverlayActionCreatorsDefault from "MobileVoiceOverlayActionCreators" /* 10873 */;
import MobileVoiceOverlayStore from "MobileVoiceOverlayStore" /* 10860 */;

require = fn;
const ReactCompilerGating = fn(558);
const SettingBuilders = fn(11262);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAndroidMobileOverlaySettingValue() {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MobileVoiceOverlayStore];
    const fn = function o() {
      return enabled.getEnabled();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  return initialize.useStateFromStores(tmp4, tmp5);
}) : (function useAndroidMobileOverlaySettingValue() {
  const items = [MobileVoiceOverlayStore];
  return initialize.useStateFromStores(items, () => enabled.getEnabled());
});
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["9CSZJm"]);
  },
  parent: fn(7966).MobileUserSettings.VOICE,
  useValue: ReactCompilerGating.isReactCompilerEnabled() ? (function useAndroidMobileOverlaySettingValue() {
    const cResult = c.c(2);
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [MobileVoiceOverlayStore];
      const fn = function o() {
        return enabled.getEnabled();
      };
      cResult[0] = items;
      cResult[1] = fn;
      tmp4 = items;
      tmp5 = fn;
    } else {
      [tmp4, tmp5] = cResult;
    }
    return initialize.useStateFromStores(tmp4, tmp5);
  }) : (function useAndroidMobileOverlaySettingValue() {
    const items = [MobileVoiceOverlayStore];
    return initialize.useStateFromStores(items, () => enabled.getEnabled());
  }),
  onValueChange: MobileVoiceOverlayActionCreatorsDefault.setEnabled,
  useDescription: function useAndroidMobileOverlaySettingDescription() {
    const intl = util.intl;
    return intl.string(util.t.Wfoivk);
  },
  usePredicate: fn(10860).isMobileOverlaySupported
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AndroidMobileOverlaySetting.tsx");

export default toggle;