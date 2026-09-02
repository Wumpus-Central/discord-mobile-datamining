// === Module 15683: useIsDisabled ===

// Module 15683 (useIsDisabled)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4166 */;
import MobileUserSettings2 from "MobileUserSettings" /* 7893 */;
import useAdPersonalizationTogglesDisabled from "useAdPersonalizationTogglesDisabled" /* 15684 */;
import apexExperiment from "apexExperiment" /* 15685 */;
import createToggle from "createToggle" /* 11288 */;

function useIsDisabled() {
  let adPersonalizationTogglesDisabled = useAdPersonalizationTogglesDisabled.useAdPersonalizationTogglesDisabled();
  const obj = useAdPersonalizationTogglesDisabled;
  if (!adPersonalizationTogglesDisabled) {
    adPersonalizationTogglesDisabled = obj2.useIsParentallyControlled();
  }
  return adPersonalizationTogglesDisabled;
}
function useDataToSupportQuestsSettingValue() {
  const DropsOptedOut = explicitContentFromProto.DropsOptedOut;
  return !DropsOptedOut.useSetting();
}
function onDataToSupportQuestsSettingValueChange(arg0) {
  const DropsOptedOut = explicitContentFromProto.DropsOptedOut;
  DropsOptedOut.updateSetting(!arg0);
}
const MobileUserSettings = MobileUserSettings2.MobileUserSettings;
let obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.sJYh5t);
  },
  parent: MobileUserSettings.DATA_AND_PRIVACY,
  usePredicate() {
    return !apexExperiment.useIsAdTopicOptOutClientEnabled();
  },
  useValue: useDataToSupportQuestsSettingValue,
  onValueChange: onDataToSupportQuestsSettingValueChange,
  useIsDisabled
};
const toggle = createToggle.createToggle(obj);
obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.sJYh5t);
  },
  parent: MobileUserSettings.SPONSORED_CONTENT_PREFERENCES,
  usePredicate: apexExperiment.useIsAdTopicOptOutClientEnabled,
  useValue: useDataToSupportQuestsSettingValue,
  onValueChange: onDataToSupportQuestsSettingValueChange,
  useIsDisabled
};
const toggle1 = createToggle.createToggle(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/UseDataForQuestsSetting.tsx");

export default toggle;
export const UseDataForQuestsSponsoredContentSetting = toggle1;