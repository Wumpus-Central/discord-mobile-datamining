// discord_app/modules/user_settings/defs/native/UseDataForQuestsSetting.tsx
import { MobileUserSettings } from "MobileUserSettings";
import createToggle from "createToggle";
import createToggle from "createToggle";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { apexExperiment } from "../../../ads/AdTopicOptOutClientExperiment.tsx";
import { useAdPersonalizationTogglesDisabled } from "../../../ads/hooks/useAdPersonalizationTogglesDisabled.tsx";
import { explicitContentFromProto } from "../../UserSettings.tsx";

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
  usePredicate: require("apexExperiment").useIsAdTopicOptOutClientEnabled,
  useValue: useDataToSupportQuestsSettingValue,
  onValueChange: onDataToSupportQuestsSettingValueChange,
  useIsDisabled
};
const toggle1 = createToggle.createToggle(obj);
const result = require("useParentalControlledExplicitContentSettings").fileFinishedImporting("modules/user_settings/defs/native/UseDataForQuestsSetting.tsx");

export default toggle;
export const UseDataForQuestsSponsoredContentSetting = toggle1;