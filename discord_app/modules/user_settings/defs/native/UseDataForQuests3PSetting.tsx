// === Module 15094: useDataToSupportQuests3PSettingValue ===

// Module 15094 (useDataToSupportQuests3PSettingValue)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4070 */;
import MobileUserSettings2 from "MobileUserSettings" /* 8235 */;
import useParentalControlledExplicitContentSettings from "useParentalControlledExplicitContentSettings" /* 14279 */;
import useAdPersonalizationTogglesDisabled from "useAdPersonalizationTogglesDisabled" /* 15092 */;
import apexExperiment from "apexExperiment" /* 15093 */;
import createToggle from "createToggle" /* 10516 */;

function useDataToSupportQuests3PSettingValue() {
  const Quests3PDataOptedOut = explicitContentFromProto.Quests3PDataOptedOut;
  return !Quests3PDataOptedOut.useSetting();
}
function useDataToSupportQuests3PSettingIsDisabled() {
  let adPersonalizationTogglesDisabled = useAdPersonalizationTogglesDisabled.useAdPersonalizationTogglesDisabled();
  const DropsOptedOut = explicitContentFromProto.DropsOptedOut;
  const setting = DropsOptedOut.useSetting();
  const obj = useAdPersonalizationTogglesDisabled;
  const isParentallyControlled = useParentalControlledExplicitContentSettings.useIsParentallyControlled();
  if (!adPersonalizationTogglesDisabled) {
    adPersonalizationTogglesDisabled = setting;
  }
  if (!adPersonalizationTogglesDisabled) {
    adPersonalizationTogglesDisabled = isParentallyControlled;
  }
  return adPersonalizationTogglesDisabled;
}
function onDataToSupportQuests3PSettingValueChange(arg0) {
  const Quests3PDataOptedOut = explicitContentFromProto.Quests3PDataOptedOut;
  Quests3PDataOptedOut.updateSetting(!arg0);
}
const MobileUserSettings = MobileUserSettings2.MobileUserSettings;
let obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.CyLYKZ);
  },
  parent: MobileUserSettings.DATA_AND_PRIVACY,
  usePredicate() {
    return !apexExperiment.useIsAdTopicOptOutClientEnabled();
  },
  useValue: useDataToSupportQuests3PSettingValue,
  onValueChange: onDataToSupportQuests3PSettingValueChange,
  useIsDisabled: useDataToSupportQuests3PSettingIsDisabled
};
const toggle = createToggle.createToggle(obj);
obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.CyLYKZ);
  },
  parent: MobileUserSettings.SPONSORED_CONTENT_PREFERENCES,
  usePredicate: apexExperiment.useIsAdTopicOptOutClientEnabled,
  useValue: useDataToSupportQuests3PSettingValue,
  onValueChange: onDataToSupportQuests3PSettingValueChange,
  useIsDisabled: useDataToSupportQuests3PSettingIsDisabled
};
const toggle1 = createToggle.createToggle(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/UseDataForQuests3PSetting.tsx");

export default toggle;
export const UseDataForQuests3PSponsoredContentSetting = toggle1;