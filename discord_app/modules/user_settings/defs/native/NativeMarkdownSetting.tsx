// === Module 17166: NativeMarkdownSetting ===

// Module 17166 (NativeMarkdownSetting)
import c from "c" /* 576 */;
import util from "util" /* 1125 */;
import SettingsConstants from "SettingsConstants" /* 8365 */;
import NativeMarkdownExperiment from "NativeMarkdownExperiment" /* 8497 */;
import useLabFeatureDefault from "useLabFeature" /* 8500 */;
import LabFeatureActions from "LabFeatureActions" /* 17165 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11248 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
let ReactCompilerGating = ReactCompilerGating_mod;
function useNativeMarkdownSettingValue() {
  return useLabFeatureDefault(NativeMarkdownExperiment.NATIVE_MARKDOWN_LAB_FEATURE);
}
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useNativeMarkdownPredicate() {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { location: "settings" };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  const NativeMarkdownSettingExperiment = NativeMarkdownExperiment.NativeMarkdownSettingExperiment;
  return NativeMarkdownSettingExperiment.useConfig(first).enabled;
}) : (function useNativeMarkdownPredicate() {
  const NativeMarkdownSettingExperiment = NativeMarkdownExperiment.NativeMarkdownSettingExperiment;
  return NativeMarkdownSettingExperiment.useConfig({ location: "settings" }).enabled;
});
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["5CIvT4"]);
  },
  parent: SettingsConstants.MobileUserSettings.ADVANCED,
  useValue: useNativeMarkdownSettingValue,
  onValueChange: function onNativeMarkdownSettingValueChange(enabled) {
    LabFeatureActions.toggleLabFeature(NativeMarkdownExperiment.NATIVE_MARKDOWN_LAB_FEATURE, { enabled });
  },
  usePredicate: ReactCompilerGating.isReactCompilerEnabled() ? (function useNativeMarkdownPredicate() {
    const cResult = c.c(1);
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { location: "settings" };
      cResult[0] = obj2;
      let first = obj2;
    } else {
      first = cResult[0];
    }
    const NativeMarkdownSettingExperiment = NativeMarkdownExperiment.NativeMarkdownSettingExperiment;
    return NativeMarkdownSettingExperiment.useConfig(first).enabled;
  }) : (function useNativeMarkdownPredicate() {
    const NativeMarkdownSettingExperiment = NativeMarkdownExperiment.NativeMarkdownSettingExperiment;
    return NativeMarkdownSettingExperiment.useConfig({ location: "settings" }).enabled;
  })
});
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/NativeMarkdownSetting.tsx");

export default toggle;