// === Module 9783: emojis/EmojiActionCreators ===

// Module 9783 (emojis/EmojiActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/emojis/EmojiActionCreators.tsx");

export const toggleGuildExpandedState = function toggleGuildExpandedState(guildId) {
  DispatcherDefault.dispatch({ type: "TOGGLE_GUILD_EXPANDED_STATE", guildId });
};
export const initiateEmojiInteraction = function initiateEmojiInteraction(AutocompleteWrapperShown) {
  DispatcherDefault.dispatch({ type: "EMOJI_INTERACTION_INITIATED", interaction: AutocompleteWrapperShown });
};