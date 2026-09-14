// discord_app/modules/emojis/EmojiActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/emojis/EmojiActionCreators.tsx");

export const toggleGuildExpandedState = function toggleGuildExpandedState(guildId) {
  DispatcherDefault.dispatch({ type: "TOGGLE_GUILD_EXPANDED_STATE", guildId });
};
export const initiateEmojiInteraction = function initiateEmojiInteraction(AutocompleteWrapperShown) {
  DispatcherDefault.dispatch({ type: "EMOJI_INTERACTION_INITIATED", interaction: AutocompleteWrapperShown });
};
