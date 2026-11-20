// === Module 16828: NativeMarkdownSetting ===

// Module 16828 (NativeMarkdownSetting)
import util from "util" /* 1112 */;
import SettingsConstants from "SettingsConstants" /* 8592 */;
import NativeMarkdownExperiment from "NativeMarkdownExperiment" /* 8672 */;
import useLabFeatureDefault from "useLabFeature" /* 8675 */;
import LabFeatureActions from "LabFeatureActions" /* 16829 */;
import SettingBuilders from "SettingBuilders" /* 11817 */;
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