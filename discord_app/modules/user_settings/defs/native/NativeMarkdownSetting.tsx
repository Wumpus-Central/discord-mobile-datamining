// === Module 17771: NativeMarkdownSetting ===

// Module 17771 (NativeMarkdownSetting)
import util from "util" /* 1113 */;
import SettingsConstants from "SettingsConstants" /* 8573 */;
import NativeMarkdownExperiment from "NativeMarkdownExperiment" /* 8702 */;
import useLabFeatureDefault from "useLabFeature" /* 8705 */;
import LabFeatureActions from "LabFeatureActions" /* 17770 */;
import SettingBuilders from "SettingBuilders" /* 11728 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["5CIvT4"]);
  },
  parent: SettingsConstants.MobileUserSettings.ADVANCED,
  useValue: function useNativeMarkdownSettingValue() {
    return useLabFeatureDefault(NativeMarkdownExperiment.NATIVE_MARKDOWN_LAB_FEATURE);
  },
  onValueChange: function onNativeMarkdownSettingValueChange(enabled) {
    LabFeatureActions.toggleLabFeature(NativeMarkdownExperiment.NATIVE_MARKDOWN_LAB_FEATURE, { enabled });
  },
  usePredicate: function useNativeMarkdownPredicate() {
    const NativeMarkdownSettingExperiment = NativeMarkdownExperiment.NativeMarkdownSettingExperiment;
    return NativeMarkdownSettingExperiment.useConfig({ location: "settings" }).enabled;
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NativeMarkdownSetting.tsx");

export default toggle;