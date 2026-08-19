// === Module 14668: toggle ===

// Module 14668 (toggle)
import obj132 from "obj132" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4066 */;
import MobileUserSettings from "MobileUserSettings" /* 8198 */;
import createToggle from "createToggle" /* 10669 */;

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
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/ExactSearchResultCountsSetting.tsx");

export default toggle;