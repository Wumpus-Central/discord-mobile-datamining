// === Module 15767: StickerAutocompleteSetting ===

// Module 15767 (StickerAutocompleteSetting)
import util from "util" /* 1126 */;
import UserSettings from "UserSettings" /* 2041 */;
import SettingsConstants from "SettingsConstants" /* 7993 */;
import UserSettingsText from "UserSettingsText" /* 15760 */;
import SettingBuilders from "SettingBuilders" /* 10663 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["29xPVZ"]);
  },
  parent: SettingsConstants.MobileUserSettings.CHAT,
  useValue: UserSettings.IncludeStickersInAutocomplete.useSetting,
  onValueChange: UserSettingsText.setStickerAutocomplete
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/StickerAutocompleteSetting.tsx");

export default toggle;