// discord_app/modules/user_settings/defs/native/SafetyTermsOfServiceSetting.tsx
import set from "../../../../../_runtime/00002_set.js";
import ME from "../../../../Constants.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import _modDef4093 from "../../../../lib/native/Linking.tsx";
import MobileUserSettings from "../../core/native/SettingsConstants.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";

const MarketingURLs = ME.MarketingURLs;
const pressable = createToggle.createPressable({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.lfC1KR);
  },
  parent: MobileUserSettings.MobileUserSettings.DATA_AND_PRIVACY,
  onPress: function onTermsOfServicePress() {
    _modDef4093.openURL(MarketingURLs.TERMS);
  },
  withArrow: true
});
const obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.lfC1KR);
  },
  parent: MobileUserSettings.MobileUserSettings.DATA_AND_PRIVACY,
  onPress: function onTermsOfServicePress() {
    _modDef4093.openURL(MarketingURLs.TERMS);
  },
  withArrow: true
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/SafetyTermsOfServiceSetting.tsx");

export default pressable;