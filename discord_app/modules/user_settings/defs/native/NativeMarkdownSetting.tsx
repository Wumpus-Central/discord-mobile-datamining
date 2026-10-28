// discord_app/modules/user_settings/defs/native/NativeMarkdownSetting.tsx
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import NativeMarkdownExperiment from "../../../markup_v2/NativeMarkdownExperiment.tsx";
import useLabFeatureDefault from "../../../labs/useLabFeature.tsx";
import LabFeatureActions from "../../../labs/LabFeatureActions.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
let ReactCompilerGating = ReactCompilerGating_mod;
function useNativeMarkdownSettingValue() {
  return useLabFeatureDefault(NativeMarkdownExperiment.NATIVE_MARKDOWN_LAB_FEATURE);
}
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useNativeMarkdownPredicate() {
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
    }
  : function useNativeMarkdownPredicate() {
      const NativeMarkdownSettingExperiment = NativeMarkdownExperiment.NativeMarkdownSettingExperiment;
      return NativeMarkdownSettingExperiment.useConfig({ location: "settings" }).enabled;
    };
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
  usePredicate: ReactCompilerGating.isReactCompilerEnabled()
    ? function useNativeMarkdownPredicate() {
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
      }
    : function useNativeMarkdownPredicate() {
        const NativeMarkdownSettingExperiment = NativeMarkdownExperiment.NativeMarkdownSettingExperiment;
        return NativeMarkdownSettingExperiment.useConfig({ location: "settings" }).enabled;
      },
});
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/NativeMarkdownSetting.tsx");

export default toggle;
