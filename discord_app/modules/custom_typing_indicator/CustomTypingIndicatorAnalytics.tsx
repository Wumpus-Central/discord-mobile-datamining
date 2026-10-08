// === Module 11660: CustomTypingIndicatorAnalytics ===

// Module 11660 (CustomTypingIndicatorAnalytics)
import user from "user" /* 1397 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_typing_indicator/CustomTypingIndicatorAnalytics.tsx");

export const getTypingIndicatorStyleAnalytics = function getTypingIndicatorStyleAnalytics(config) {
  const obj = { emoji_names: null, animation_name: user.TypingIndicatorAnimation[config.animation], typing_suggestion: user.TypingSuggestion[config.typingSuggestion], custom_emoji_count: null };
  const emojis = config.emojis;
  obj.emoji_names = emojis.map((name) => name.name);
  const emojis1 = config.emojis;
  obj.custom_emoji_count = emojis1.filter((id) => null != id.id).length;
  return obj;
};