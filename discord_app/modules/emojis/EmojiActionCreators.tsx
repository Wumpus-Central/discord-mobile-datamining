// === Module 9940: emojis/EmojiActionCreators ===

// Module 9940 (emojis/EmojiActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/emojis/EmojiActionCreators.tsx");

export function toggleGuildExpandedState(guildId) {
  DispatcherDefault.dispatch({ type: "TOGGLE_GUILD_EXPANDED_STATE", guildId });
}
export function initiateEmojiInteraction(AutocompleteWrapperShown) {
  DispatcherDefault.dispatch({ type: "EMOJI_INTERACTION_INITIATED", interaction: AutocompleteWrapperShown });
}