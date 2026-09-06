// === Module 15855: UseDataForQuestsSetting ===

// Module 15855 (UseDataForQuestsSetting)
import util from "util" /* 1114 */;
import UserSettings from "UserSettings" /* 1935 */;
import SettingsConstants from "SettingsConstants" /* 7975 */;
import useAdPersonalizationTogglesDisabled from "useAdPersonalizationTogglesDisabled" /* 15856 */;
import AdTopicOptOutClientExperiment from "AdTopicOptOutClientExperiment" /* 15857 */;
import SettingBuilders from "SettingBuilders" /* 11468 */;
import size from "module_2" /* 2 */;

function useIsDisabled() {
  let adPersonalizationTogglesDisabled = useAdPersonalizationTogglesDisabled.useAdPersonalizationTogglesDisabled();
  if (!adPersonalizationTogglesDisabled) {
    adPersonalizationTogglesDisabled = obj2.useIsParentallyControlled();
  }
  return adPersonalizationTogglesDisabled;
}
function useDataToSupportQuestsSettingValue() {
  const DropsOptedOut = UserSettings.DropsOptedOut;
  return !DropsOptedOut.useSetting();
}
function onDataToSupportQuestsSettingValueChange(arg0) {
  const DropsOptedOut = UserSettings.DropsOptedOut;
  DropsOptedOut.updateSetting(!arg0);
}
const MobileUserSettings = SettingsConstants.MobileUserSettings;
let obj = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.sJYh5t);
  },
  parent: MobileUserSettings.DATA_AND_PRIVACY,
  usePredicate() {
    return !AdTopicOptOutClientExperiment.useIsAdTopicOptOutClientEnabled();
  },
  useValue: useDataToSupportQuestsSettingValue,
  onValueChange: onDataToSupportQuestsSettingValueChange,
  useIsDisabled
};
const toggle = SettingBuilders.createToggle(obj);
obj = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.sJYh5t);
  },
  parent: MobileUserSettings.SPONSORED_CONTENT_PREFERENCES,
  usePredicate: AdTopicOptOutClientExperiment.useIsAdTopicOptOutClientEnabled,
  useValue: useDataToSupportQuestsSettingValue,
  onValueChange: onDataToSupportQuestsSettingValueChange,
  useIsDisabled
};
const toggle1 = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/UseDataForQuestsSetting.tsx");

export default toggle;
export const UseDataForQuestsSponsoredContentSetting = toggle1;