// === Module 16754: StickerAutocompleteSetting ===

// Module 16754 (StickerAutocompleteSetting)
import util from "util" /* 1112 */;
import UserSettings from "UserSettings" /* 4619 */;
import SettingsConstants from "SettingsConstants" /* 8592 */;
import UserSettingsText from "UserSettingsText" /* 16747 */;
import SettingBuilders from "SettingBuilders" /* 11817 */;
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