// === Module 15351: NoiseSuppressionSetting ===

// Module 15351 (NoiseSuppressionSetting)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import UserSettingsVoiceUtils from "UserSettingsVoiceUtils" /* 10875 */;
import MediaEngineStore from "MediaEngineStore" /* 2011 */;

require = fn;
fn(558);
const ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useNoiseSuppressionSettingValue() {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MediaEngineStore];
    const fn = function n() {
      return noiseSuppression.getNoiseSuppression();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  return initialize.useStateFromStores(tmp4, tmp5);
}) : (function useNoiseSuppressionSettingValue() {
  const items = [MediaEngineStore];
  return initialize.useStateFromStores(items, () => noiseSuppression.getNoiseSuppression());
});
const SettingBuilders = fn(11262);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useHasNoiseSuppressionSetting() {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MediaEngineStore];
    const fn = function n() {
      return !noiseCancellationSupported.isNoiseCancellationSupported();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  return initialize.useStateFromStores(tmp4, tmp5);
}) : (function useHasNoiseSuppressionSetting() {
  const items = [MediaEngineStore];
  return initialize.useStateFromStores(items, () => !noiseCancellationSupported.isNoiseCancellationSupported());
});
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.t8Qhib);
  },
  parent: fn(7966).MobileUserSettings.VOICE,
  useValue: tmp2,
  onValueChange: function onNoiseSuppressionSettingValueChange(arg0) {
    const NoiseSuppressionOpt = UserSettingsVoiceUtils.NoiseSuppressionOpt;
    const result = UserSettingsVoiceUtils.handleNoiseSuppressionChange(arg0 ? NoiseSuppressionOpt.STANDARD : NoiseSuppressionOpt.NONE);
  },
  usePredicate: ReactCompilerGating.isReactCompilerEnabled() ? (function useHasNoiseSuppressionSetting() {
    const cResult = c.c(2);
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [MediaEngineStore];
      const fn = function n() {
        return !noiseCancellationSupported.isNoiseCancellationSupported();
      };
      cResult[0] = items;
      cResult[1] = fn;
      tmp4 = items;
      tmp5 = fn;
    } else {
      [tmp4, tmp5] = cResult;
    }
    return initialize.useStateFromStores(tmp4, tmp5);
  }) : (function useHasNoiseSuppressionSetting() {
    const items = [MediaEngineStore];
    return initialize.useStateFromStores(items, () => !noiseCancellationSupported.isNoiseCancellationSupported());
  })
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/NoiseSuppressionSetting.tsx");

export default toggle;