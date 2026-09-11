// === Module 15386: GameMentionsAutocompleteSetting ===

// Module 15386 (GameMentionsAutocompleteSetting)
import util from "util" /* 1114 */;
import UserSettings from "UserSettings" /* 1935 */;
import SettingsConstants from "SettingsConstants" /* 8049 */;
import SettingBuilders from "SettingBuilders" /* 11562 */;
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