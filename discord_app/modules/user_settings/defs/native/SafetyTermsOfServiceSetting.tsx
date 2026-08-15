// discord_app/modules/user_settings/defs/native/SafetyTermsOfServiceSetting.tsx
import { MarketingURLs } from "ME";
import createToggle from "createToggle";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { Linking } from "../../../../lib/native/Linking.tsx";

const pressable = createToggle.createPressable({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.lfC1KR);
  },
  parent: require("MobileUserSettings").MobileUserSettings.DATA_AND_PRIVACY,
  onPress: function onTermsOfServicePress() {
    Linking.openURL(MarketingURLs.TERMS);
  },
  withArrow: true
});
const obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.lfC1KR);
  },
  parent: require("MobileUserSettings").MobileUserSettings.DATA_AND_PRIVACY,
  onPress: function onTermsOfServicePress() {
    Linking.openURL(MarketingURLs.TERMS);
  },
  withArrow: true
};
const result = require("module_4090").fileFinishedImporting("modules/user_settings/defs/native/SafetyTermsOfServiceSetting.tsx");

export default pressable;