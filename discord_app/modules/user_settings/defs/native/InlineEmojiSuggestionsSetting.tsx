// discord_app/modules/user_settings/defs/native/InlineEmojiSuggestionsSetting.tsx
import util from "../../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import UserSettings from "../../UserSettings.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import MobileEmojiSuggestionsExperiment from "../../../chat_input/experiments/MobileEmojiSuggestionsExperiment.tsx";
import Constants from "../../../../Constants.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

({ AnalyticEvents: c3, AnalyticsSections: closure_4 } = Constants);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["0sh8CQ"]);
  },
  parent: SettingsConstants.MobileUserSettings.CHAT,
  useValue: UserSettings.InlineEmojiSuggestionsEnabled.useSetting,
  onValueChange: function onInlineEmojiSuggestionsValueChange(enabled) {
    const obj2 = { enabled, location: { section: constants2.SETTINGS_TEXT_AND_IMAGES } };
    AnalyticsUtilsDefault.track(constants.INLINE_EMOJI_SUGGESTIONS_TOGGLED, obj2);
    const InlineEmojiSuggestionsEnabled = UserSettings.InlineEmojiSuggestionsEnabled;
    InlineEmojiSuggestionsEnabled.updateSetting(enabled);
  },
  usePredicate() {
    return MobileEmojiSuggestionsExperiment.useMobileEmojiSuggestionsConfig({
      location: "InlineEmojiSuggestionsSetting",
    }).enabled;
  },
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/InlineEmojiSuggestionsSetting.tsx");

export default toggle;
