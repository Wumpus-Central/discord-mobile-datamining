// discord_app/modules/user_settings/defs/native/UseDataForQuestsSetting.tsx
import intl2 from "../../../../intl/index.native.tsx";
import UserSettings from "../../UserSettings.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import useParentalControlSettings from "../../../parent_tools/hooks/useParentalControlSettings.tsx";
import useAdPersonalizationTogglesDisabled from "../../../ads/hooks/useAdPersonalizationTogglesDisabled.tsx";
import AdTopicOptOutClientExperiment from "../../../ads/AdTopicOptOutClientExperiment.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import SettingBuilders_mod from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const obj = useAdPersonalizationTogglesDisabled;
      let adPersonalizationTogglesDisabled = obj.useAdPersonalizationTogglesDisabled();
      const obj2 = useParentalControlSettings;
      if (!adPersonalizationTogglesDisabled) {
        adPersonalizationTogglesDisabled = obj2.useIsParentallyControlled();
      }
      return adPersonalizationTogglesDisabled;
    }
  : () => {
      const obj = useAdPersonalizationTogglesDisabled;
      let adPersonalizationTogglesDisabled = obj.useAdPersonalizationTogglesDisabled();
      const obj2 = useParentalControlSettings;
      if (!adPersonalizationTogglesDisabled) {
        adPersonalizationTogglesDisabled = obj2.useIsParentallyControlled();
      }
      return adPersonalizationTogglesDisabled;
    };
function onDataToSupportQuestsSettingValueChange(arg0) {
  const DropsOptedOut = UserSettings.DropsOptedOut;
  DropsOptedOut.updateSetting(!arg0);
}
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const fn = () => {
  const DropsOptedOut = UserSettings.DropsOptedOut;
  return !DropsOptedOut.useSetting();
};
let SettingBuilders = SettingBuilders_mod;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.sJYh5t);
  },
  parent: MobileUserSettings.DATA_AND_PRIVACY,
  usePredicate() {
    const obj = AdTopicOptOutClientExperiment;
    return !obj.useIsAdTopicOptOutClientEnabled();
  },
  useValue: fn,
  onValueChange: onDataToSupportQuestsSettingValueChange,
  useIsDisabled: tmp2,
};
const toggle = SettingBuilders.createToggle(obj);
SettingBuilders = SettingBuilders_mod;
let obj2 = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.sJYh5t);
  },
  parent: MobileUserSettings.SPONSORED_CONTENT_PREFERENCES,
  usePredicate: AdTopicOptOutClientExperiment.useIsAdTopicOptOutClientEnabled,
  useValue: fn,
  onValueChange: onDataToSupportQuestsSettingValueChange,
  useIsDisabled: tmp2,
};
const toggle1 = SettingBuilders.createToggle(obj2);
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/UseDataForQuestsSetting.tsx");

export default toggle;
export const UseDataForQuestsSponsoredContentSetting = toggle1;
