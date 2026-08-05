// discord_app/modules/user_settings/defs/native/SafetyPrivacyPolicySetting.tsx
import { MarketingURLs } from "ME";
import createToggle from "createToggle";

const pressable = createToggle.createPressable({
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.KGFTww);
  },
  parent: require("MobileSetting").MobileSetting.DATA_AND_PRIVACY,
  onPress: function onPrivacyPolicyPress() {
    require("../../../../lib/native/Linking.tsx").openURL(MarketingURLs.PRIVACY);
  },
  withArrow: true
});
const obj = {
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.KGFTww);
  },
  parent: require("MobileSetting").MobileSetting.DATA_AND_PRIVACY,
  onPress: function onPrivacyPolicyPress() {
    require("../../../../lib/native/Linking.tsx").openURL(MarketingURLs.PRIVACY);
  },
  withArrow: true
};
const result = require("module_3982").fileFinishedImporting("modules/user_settings/defs/native/SafetyPrivacyPolicySetting.tsx");

export default pressable;