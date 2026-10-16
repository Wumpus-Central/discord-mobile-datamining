// === Module 9741: trackEmojiSuggestionSelected ===

// Module 9741 (trackEmojiSuggestionSelected)
import Constants from "Constants" /* 1087 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5169 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/chat_input/native/trackEmojiSuggestionSelected.tsx");

export default function trackEmojiSuggestionSelected(arg0) {
  ({ emoji, displayedSuggestions } = arg0);
  const obj2 = { expression_id: emoji.id, expression_name: null, expression_guild_id: null, is_custom: null, is_animated: null, emoji_position: null };
  let name = emoji.uniqueName;
  if (name == null) {
    name = emoji.name;
  }
  obj2.expression_name = name;
  obj2.expression_guild_id = emoji.guildId;
  obj2.is_custom = null != emoji.id;
  obj2.is_animated = emoji.animated;
  obj2.emoji_position = displayedSuggestions.indexOf(emoji);
  AppAnalyticsUtilsDefault.trackWithMetadata(AnalyticEvents.EMOJI_SUGGESTION_SELECTED, obj2);
};