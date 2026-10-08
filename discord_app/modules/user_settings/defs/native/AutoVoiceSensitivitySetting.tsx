// === Module 15344: AutoVoiceSensitivitySetting ===

// Module 15344 (AutoVoiceSensitivitySetting)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 5241 */;
import MediaEngineStore from "MediaEngineStore" /* 2011 */;

require = fn;
const ReactCompilerGating = fn(558);
const SettingBuilders = fn(11262);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAutoVoiceSensitivitySettingValue() {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MediaEngineStore];
    const fn = function n() {
      return modeOptions.getModeOptions().autoThreshold;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  return initialize.useStateFromStores(tmp4, tmp5);
}) : (function useAutoVoiceSensitivitySettingValue() {
  const items = [MediaEngineStore];
  return initialize.useStateFromStores(items, () => modeOptions.getModeOptions().autoThreshold);
});
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.Z4oaN0);
  },
  parent: fn(7966).MobileUserSettings.VOICE,
  useValue: ReactCompilerGating.isReactCompilerEnabled() ? (function useAutoVoiceSensitivitySettingValue() {
    const cResult = c.c(2);
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [MediaEngineStore];
      const fn = function n() {
        return modeOptions.getModeOptions().autoThreshold;
      };
      cResult[0] = items;
      cResult[1] = fn;
      tmp4 = items;
      tmp5 = fn;
    } else {
      [tmp4, tmp5] = cResult;
    }
    return initialize.useStateFromStores(tmp4, tmp5);
  }) : (function useAutoVoiceSensitivitySettingValue() {
    const items = [MediaEngineStore];
    return initialize.useStateFromStores(items, () => modeOptions.getModeOptions().autoThreshold);
  }),
  onValueChange: function onAutoVoiceSensitivitySettingValueChange(autoThreshold) {
    const mode = MediaEngineStore.getMode();
    AudioActionCreatorsDefault.setMode(mode, { autoThreshold });
  },
  useSearchTerms() {
    const intl = util.intl;
    const items = [intl.string(util.t.nuFtHH)];
    return items;
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AutoVoiceSensitivitySetting.tsx");

export default toggle;