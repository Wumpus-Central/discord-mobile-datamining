// discord_app/modules/user_settings/defs/native/UseDataForQuests3PSetting.tsx
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
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const obj = useAdPersonalizationTogglesDisabled;
      let adPersonalizationTogglesDisabled = obj.useAdPersonalizationTogglesDisabled();
      const DropsOptedOut = UserSettings.DropsOptedOut;
      const setting = DropsOptedOut.useSetting();
      const obj2 = useParentalControlSettings;
      const isParentallyControlled = obj2.useIsParentallyControlled();
      if (!adPersonalizationTogglesDisabled) {
        adPersonalizationTogglesDisabled = setting;
      }
      if (!adPersonalizationTogglesDisabled) {
        adPersonalizationTogglesDisabled = isParentallyControlled;
      }
      return adPersonalizationTogglesDisabled;
    }
  : () => {
      const obj = useAdPersonalizationTogglesDisabled;
      let adPersonalizationTogglesDisabled = obj.useAdPersonalizationTogglesDisabled();
      const DropsOptedOut = UserSettings.DropsOptedOut;
      const setting = DropsOptedOut.useSetting();
      const obj2 = useParentalControlSettings;
      const isParentallyControlled = obj2.useIsParentallyControlled();
      if (!adPersonalizationTogglesDisabled) {
        adPersonalizationTogglesDisabled = setting;
      }
      if (!adPersonalizationTogglesDisabled) {
        adPersonalizationTogglesDisabled = isParentallyControlled;
      }
      return adPersonalizationTogglesDisabled;
    };
function onDataToSupportQuests3PSettingValueChange(arg0) {
  const Quests3PDataOptedOut = UserSettings.Quests3PDataOptedOut;
  Quests3PDataOptedOut.updateSetting(!arg0);
}
const fn = () => {
  const Quests3PDataOptedOut = UserSettings.Quests3PDataOptedOut;
  return !Quests3PDataOptedOut.useSetting();
};
let SettingBuilders = SettingBuilders_mod;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.CyLYKZ);
  },
  parent: MobileUserSettings.DATA_AND_PRIVACY,
  usePredicate() {
    const obj = AdTopicOptOutClientExperiment;
    return !obj.useIsAdTopicOptOutClientEnabled();
  },
  useValue: fn,
  onValueChange: onDataToSupportQuests3PSettingValueChange,
  useIsDisabled: tmp3,
};
const toggle = SettingBuilders.createToggle(obj);
SettingBuilders = SettingBuilders_mod;
let obj2 = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.CyLYKZ);
  },
  parent: MobileUserSettings.SPONSORED_CONTENT_PREFERENCES,
  usePredicate: AdTopicOptOutClientExperiment.useIsAdTopicOptOutClientEnabled,
  useValue: fn,
  onValueChange: onDataToSupportQuests3PSettingValueChange,
  useIsDisabled: tmp3,
};
const toggle1 = SettingBuilders.createToggle(obj2);
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/UseDataForQuests3PSetting.tsx");

export default toggle;
export const UseDataForQuests3PSponsoredContentSetting = toggle1;
