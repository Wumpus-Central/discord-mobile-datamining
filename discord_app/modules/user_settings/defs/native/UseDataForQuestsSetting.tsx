// discord_app/modules/user_settings/defs/native/UseDataForQuestsSetting.tsx
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.sJYh5t);
  },
  parent: require("MobileSetting").MobileSetting.DATA_AND_PRIVACY,
  useValue: function useDataToSupportQuestsSettingValue() {
    const DropsOptedOut = require("../../UserSettings.tsx") /* explicitContentFromProto */.DropsOptedOut;
    return !DropsOptedOut.useSetting();
  },
  onValueChange: function onDataToSupportQuestsSettingValueChange(arg0) {
    const DropsOptedOut = require("../../UserSettings.tsx") /* explicitContentFromProto */.DropsOptedOut;
    DropsOptedOut.updateSetting(!arg0);
  },
  useIsDisabled() {
    let adPersonalizationTogglesDisabled = require("../../../ads/hooks/useAdPersonalizationTogglesDisabled.tsx") /* useAdPersonalizationTogglesDisabled */.useAdPersonalizationTogglesDisabled();
    const obj = require("../../../ads/hooks/useAdPersonalizationTogglesDisabled.tsx") /* useAdPersonalizationTogglesDisabled */;
    if (!adPersonalizationTogglesDisabled) {
      adPersonalizationTogglesDisabled = obj2.useIsParentallyControlled();
    }
    return adPersonalizationTogglesDisabled;
  }
});
let obj = {
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.sJYh5t);
  },
  parent: require("MobileSetting").MobileSetting.DATA_AND_PRIVACY,
  useValue: function useDataToSupportQuestsSettingValue() {
    const DropsOptedOut = require("../../UserSettings.tsx") /* explicitContentFromProto */.DropsOptedOut;
    return !DropsOptedOut.useSetting();
  },
  onValueChange: function onDataToSupportQuestsSettingValueChange(arg0) {
    const DropsOptedOut = require("../../UserSettings.tsx") /* explicitContentFromProto */.DropsOptedOut;
    DropsOptedOut.updateSetting(!arg0);
  },
  useIsDisabled() {
    let adPersonalizationTogglesDisabled = require("../../../ads/hooks/useAdPersonalizationTogglesDisabled.tsx") /* useAdPersonalizationTogglesDisabled */.useAdPersonalizationTogglesDisabled();
    const obj = require("../../../ads/hooks/useAdPersonalizationTogglesDisabled.tsx") /* useAdPersonalizationTogglesDisabled */;
    if (!adPersonalizationTogglesDisabled) {
      adPersonalizationTogglesDisabled = obj2.useIsParentallyControlled();
    }
    return adPersonalizationTogglesDisabled;
  }
};
const result = require("useParentalControlledExplicitContentSettings").fileFinishedImporting("modules/user_settings/defs/native/UseDataForQuestsSetting.tsx");

export default toggle;