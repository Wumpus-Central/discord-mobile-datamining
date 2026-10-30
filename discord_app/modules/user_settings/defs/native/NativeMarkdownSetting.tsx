// discord_app/modules/user_settings/defs/native/NativeMarkdownSetting.tsx
import util from "../../../../intl/index.native.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import NativeMarkdownExperiment from "../../../markup_v2/NativeMarkdownExperiment.tsx";
import useLabFeatureDefault from "../../../labs/useLabFeature.tsx";
import LabFeatureActions from "../../../labs/LabFeatureActions.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

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
  },
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NativeMarkdownSetting.tsx");

export default toggle;
