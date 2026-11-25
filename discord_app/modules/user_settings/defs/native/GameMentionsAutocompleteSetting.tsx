// === Module 16884: GameMentionsAutocompleteSetting ===

// Module 16884 (GameMentionsAutocompleteSetting)
import util from "util" /* 1112 */;
import UserSettings from "UserSettings" /* 4837 */;
import SettingsConstants from "SettingsConstants" /* 9513 */;
import SettingBuilders from "SettingBuilders" /* 11914 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.c0oFDw);
  },
  parent: SettingsConstants.MobileUserSettings.APPEARANCE,
  useValue: UserSettings.IncludeGameMentionsInAutocomplete.useSetting,
  onValueChange: UserSettings.IncludeGameMentionsInAutocomplete.updateSetting
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/GameMentionsAutocompleteSetting.tsx");

export default toggle;