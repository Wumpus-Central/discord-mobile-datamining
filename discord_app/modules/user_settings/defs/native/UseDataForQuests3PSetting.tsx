// discord_app/modules/user_settings/defs/native/UseDataForQuests3PSetting.tsx
import createToggle from "createToggle";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { useAdPersonalizationTogglesDisabled } from "../../../ads/hooks/useAdPersonalizationTogglesDisabled.tsx";
import { useParentalControlledExplicitContentSettings } from "../../../parent_tools/hooks/useParentalControlSettings.tsx";
import { explicitContentFromProto } from "../../UserSettings.tsx";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t.CyLYKZ);
  },
  parent: require("MobileSetting").MobileSetting.DATA_AND_PRIVACY,
  useValue: function useDataToSupportQuests3PSettingValue() {
    const Quests3PDataOptedOut = explicitContentFromProto /* explicitContentFromProto */.Quests3PDataOptedOut;
    return !Quests3PDataOptedOut.useSetting();
  },
  onValueChange: function onDataToSupportQuests3PSettingValueChange(arg0) {
    const Quests3PDataOptedOut = explicitContentFromProto /* explicitContentFromProto */.Quests3PDataOptedOut;
    Quests3PDataOptedOut.updateSetting(!arg0);
  },
  useIsDisabled: function useDataToSupportQuests3PSettingIsDisabled() {
    let adPersonalizationTogglesDisabled = useAdPersonalizationTogglesDisabled /* useAdPersonalizationTogglesDisabled */.useAdPersonalizationTogglesDisabled();
    const DropsOptedOut = explicitContentFromProto /* explicitContentFromProto */.DropsOptedOut;
    const setting = DropsOptedOut.useSetting();
    const obj = useAdPersonalizationTogglesDisabled /* useAdPersonalizationTogglesDisabled */;
    const isParentallyControlled = useParentalControlledExplicitContentSettings /* useParentalControlledExplicitContentSettings */.useIsParentallyControlled();
    if (!adPersonalizationTogglesDisabled) {
      adPersonalizationTogglesDisabled = setting;
    }
    if (!adPersonalizationTogglesDisabled) {
      adPersonalizationTogglesDisabled = isParentallyControlled;
    }
    return adPersonalizationTogglesDisabled;
  }
});
let obj = {
  useTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t.CyLYKZ);
  },
  parent: require("MobileSetting").MobileSetting.DATA_AND_PRIVACY,
  useValue: function useDataToSupportQuests3PSettingValue() {
    const Quests3PDataOptedOut = explicitContentFromProto /* explicitContentFromProto */.Quests3PDataOptedOut;
    return !Quests3PDataOptedOut.useSetting();
  },
  onValueChange: function onDataToSupportQuests3PSettingValueChange(arg0) {
    const Quests3PDataOptedOut = explicitContentFromProto /* explicitContentFromProto */.Quests3PDataOptedOut;
    Quests3PDataOptedOut.updateSetting(!arg0);
  },
  useIsDisabled: function useDataToSupportQuests3PSettingIsDisabled() {
    let adPersonalizationTogglesDisabled = useAdPersonalizationTogglesDisabled /* useAdPersonalizationTogglesDisabled */.useAdPersonalizationTogglesDisabled();
    const DropsOptedOut = explicitContentFromProto /* explicitContentFromProto */.DropsOptedOut;
    const setting = DropsOptedOut.useSetting();
    const obj = useAdPersonalizationTogglesDisabled /* useAdPersonalizationTogglesDisabled */;
    const isParentallyControlled = useParentalControlledExplicitContentSettings /* useParentalControlledExplicitContentSettings */.useIsParentallyControlled();
    if (!adPersonalizationTogglesDisabled) {
      adPersonalizationTogglesDisabled = setting;
    }
    if (!adPersonalizationTogglesDisabled) {
      adPersonalizationTogglesDisabled = isParentallyControlled;
    }
    return adPersonalizationTogglesDisabled;
  }
};
const result = require("useAdPersonalizationTogglesDisabled").fileFinishedImporting("modules/user_settings/defs/native/UseDataForQuests3PSetting.tsx");

export default toggle;