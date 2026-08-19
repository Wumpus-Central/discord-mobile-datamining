// === Module 9299: toggleGuildExpandedState ===

// Module 9299 (toggleGuildExpandedState)
import obj132 from "obj132" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const result = obj132.fileFinishedImporting("modules/emojis/EmojiActionCreators.tsx");

export const toggleGuildExpandedState = function toggleGuildExpandedState(guildId) {
  const obj = { type: "TOGGLE_GUILD_EXPANDED_STATE", guildId };
  obj.dispatch(obj);
};
export const initiateEmojiInteraction = function initiateEmojiInteraction(AutocompleteWrapperShown) {
  const obj = { type: "EMOJI_INTERACTION_INITIATED", interaction: AutocompleteWrapperShown };
  obj.dispatch(obj);
};