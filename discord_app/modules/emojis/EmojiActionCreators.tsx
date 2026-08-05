// discord_app/modules/emojis/EmojiActionCreators.tsx
const result = require("set").fileFinishedImporting("modules/emojis/EmojiActionCreators.tsx");

export const toggleGuildExpandedState = function toggleGuildExpandedState(guildId) {
  let obj = require("../../Dispatcher.tsx");
  obj = { type: "TOGGLE_GUILD_EXPANDED_STATE", guildId };
  obj.dispatch(obj);
};
export const initiateEmojiInteraction = function initiateEmojiInteraction(AutocompleteWrapperShown) {
  let obj = require("../../Dispatcher.tsx");
  obj = { type: "EMOJI_INTERACTION_INITIATED", interaction: AutocompleteWrapperShown };
  obj.dispatch(obj);
};