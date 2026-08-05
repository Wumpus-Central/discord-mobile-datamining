// discord_app/modules/user_settings/defs/native/SafetyPrivacyPolicySetting.tsx
import { MarketingURLs } from "ME";
import createToggle from "createToggle";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { Linking } from "../../../../lib/native/Linking.tsx";

const pressable = createToggle.createPressable({
  useTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t.KGFTww);
  },
  parent: require("MobileSetting").MobileSetting.DATA_AND_PRIVACY,
  onPress: function onPrivacyPolicyPress() {
    Linking.openURL(MarketingURLs.PRIVACY);
  },
  withArrow: true
});
const obj = {
  useTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t.KGFTww);
  },
  parent: require("MobileSetting").MobileSetting.DATA_AND_PRIVACY,
  onPress: function onPrivacyPolicyPress() {
    Linking.openURL(MarketingURLs.PRIVACY);
  },
  withArrow: true
};
const result = require("module_3982").fileFinishedImporting("modules/user_settings/defs/native/SafetyPrivacyPolicySetting.tsx");

export default pressable;