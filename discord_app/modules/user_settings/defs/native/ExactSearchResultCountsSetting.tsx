// === Module 15138: ExactSearchResultCountsSetting ===

// Module 15138 (ExactSearchResultCountsSetting)
import util from "util" /* 1126 */;
import UserSettings from "UserSettings" /* 2028 */;
import SettingsConstants from "SettingsConstants" /* 7634 */;
import SettingBuilders from "SettingBuilders" /* 11129 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.aP91Ud);
  },
  parent: SettingsConstants.MobileUserSettings.APPEARANCE,
  useValue: UserSettings.SearchResultExactCountEnabled.useSetting,
  onValueChange: UserSettings.SearchResultExactCountEnabled.updateSetting,
  useDescription: function useSearchResultExactCountDescription() {
    const intl = util.intl;
    return intl.string(util.t.qx4cha);
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ExactSearchResultCountsSetting.tsx");

export default toggle;