// === Module 14866: toggle ===

// Module 14866 (toggle)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4134 */;
import MobileUserSettings from "MobileUserSettings" /* 7816 */;
import createToggle from "createToggle" /* 10988 */;

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.aP91Ud);
  },
  parent: MobileUserSettings.MobileUserSettings.APPEARANCE,
  useValue: explicitContentFromProto.SearchResultExactCountEnabled.useSetting,
  onValueChange: explicitContentFromProto.SearchResultExactCountEnabled.updateSetting,
  useDescription: function useSearchResultExactCountDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.qx4cha);
  }
});
const obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.aP91Ud);
  },
  parent: MobileUserSettings.MobileUserSettings.APPEARANCE,
  useValue: explicitContentFromProto.SearchResultExactCountEnabled.useSetting,
  onValueChange: explicitContentFromProto.SearchResultExactCountEnabled.updateSetting,
  useDescription: function useSearchResultExactCountDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.qx4cha);
  }
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/ExactSearchResultCountsSetting.tsx");

export default toggle;