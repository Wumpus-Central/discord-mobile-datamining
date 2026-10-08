// discord_app/modules/custom_typing_indicator/CustomTypingIndicatorAnalytics.tsx
import user from "../../../discord_common/js/packages/protos/discord_protos/users/v1/user.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/custom_typing_indicator/CustomTypingIndicatorAnalytics.tsx");

export const getTypingIndicatorStyleAnalytics = function getTypingIndicatorStyleAnalytics(config) {
  const obj = {
    emoji_names: null,
    animation_name: user.TypingIndicatorAnimation[config.animation],
    typing_suggestion: user.TypingSuggestion[config.typingSuggestion],
    custom_emoji_count: null,
  };
  const emojis = config.emojis;
  obj.emoji_names = emojis.map((name) => name.name);
  const emojis1 = config.emojis;
  obj.custom_emoji_count = emojis1.filter((id) => null != id.id).length;
  return obj;
};
