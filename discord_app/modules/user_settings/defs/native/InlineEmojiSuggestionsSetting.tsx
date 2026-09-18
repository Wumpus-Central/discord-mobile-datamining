// === Module 15684: InlineEmojiSuggestionsSetting ===

// Module 15684 (InlineEmojiSuggestionsSetting)
import util from "util" /* 1115 */;
import UserSettings from "UserSettings" /* 1936 */;
import SettingsConstants from "SettingsConstants" /* 8194 */;
import MobileEmojiSuggestionsExperiment from "MobileEmojiSuggestionsExperiment" /* 12205 */;
import SettingBuilders from "SettingBuilders" /* 11714 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["0sh8CQ"]);
  },
  parent: SettingsConstants.MobileUserSettings.CHAT,
  useValue: UserSettings.InlineEmojiSuggestionsEnabled.useSetting,
  onValueChange: UserSettings.InlineEmojiSuggestionsEnabled.updateSetting,
  usePredicate() {
    return MobileEmojiSuggestionsExperiment.useMobileEmojiSuggestionsConfig({ location: "InlineEmojiSuggestionsSetting" }).enabled;
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/InlineEmojiSuggestionsSetting.tsx");

export default toggle;