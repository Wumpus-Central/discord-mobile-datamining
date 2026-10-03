// === Module 15139: GameMentionsAutocompleteSetting ===

// Module 15139 (GameMentionsAutocompleteSetting)
import util from "util" /* 1126 */;
import UserSettings from "UserSettings" /* 2028 */;
import SettingsConstants from "SettingsConstants" /* 7634 */;
import SettingBuilders from "SettingBuilders" /* 11129 */;
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