// === Module 18135: StickerAutocompleteSetting ===

// Module 18135 (StickerAutocompleteSetting)
import util from "util" /* 1113 */;
import UserSettings from "UserSettings" /* 5135 */;
import SettingsConstants from "SettingsConstants" /* 9213 */;
import UserSettingsText from "UserSettingsText" /* 18128 */;
import SettingBuilders from "SettingBuilders" /* 12612 */;
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