// discord_app/modules/user_settings/defs/native/UseDataForQuests3PSetting.tsx
import util from "../../../../intl/index.native.tsx";
import UserSettings from "../../UserSettings.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import useParentalControlSettings from "../../../parent_tools/hooks/useParentalControlSettings.tsx";
import useAdPersonalizationTogglesDisabled from "../../../ads/hooks/useAdPersonalizationTogglesDisabled.tsx";
import AdTopicOptOutClientExperiment from "../../../ads/AdTopicOptOutClientExperiment.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

function useDataToSupportQuests3PSettingValue() {
  const Quests3PDataOptedOut = UserSettings.Quests3PDataOptedOut;
  return !Quests3PDataOptedOut.useSetting();
}
function useDataToSupportQuests3PSettingIsDisabled() {
  let adPersonalizationTogglesDisabled = useAdPersonalizationTogglesDisabled.useAdPersonalizationTogglesDisabled();
  const DropsOptedOut = UserSettings.DropsOptedOut;
  const setting = DropsOptedOut.useSetting();
  const isParentallyControlled = useParentalControlSettings.useIsParentallyControlled();
  if (!adPersonalizationTogglesDisabled) {
    adPersonalizationTogglesDisabled = setting;
  }
  if (!adPersonalizationTogglesDisabled) {
    adPersonalizationTogglesDisabled = isParentallyControlled;
  }
  return adPersonalizationTogglesDisabled;
}
function onDataToSupportQuests3PSettingValueChange(arg0) {
  const Quests3PDataOptedOut = UserSettings.Quests3PDataOptedOut;
  Quests3PDataOptedOut.updateSetting(!arg0);
}
const MobileUserSettings = SettingsConstants.MobileUserSettings;
let obj = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.CyLYKZ);
  },
  parent: MobileUserSettings.DATA_AND_PRIVACY,
  usePredicate() {
    return !AdTopicOptOutClientExperiment.useIsAdTopicOptOutClientEnabled();
  },
  useValue: useDataToSupportQuests3PSettingValue,
  onValueChange: onDataToSupportQuests3PSettingValueChange,
  useIsDisabled: useDataToSupportQuests3PSettingIsDisabled,
};
const toggle = SettingBuilders.createToggle(obj);
obj = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.CyLYKZ);
  },
  parent: MobileUserSettings.SPONSORED_CONTENT_PREFERENCES,
  usePredicate: AdTopicOptOutClientExperiment.useIsAdTopicOptOutClientEnabled,
  useValue: useDataToSupportQuests3PSettingValue,
  onValueChange: onDataToSupportQuests3PSettingValueChange,
  useIsDisabled: useDataToSupportQuests3PSettingIsDisabled,
};
const toggle1 = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/UseDataForQuests3PSetting.tsx");

export default toggle;
export const UseDataForQuests3PSponsoredContentSetting = toggle1;
