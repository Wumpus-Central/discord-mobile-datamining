// discord_app/modules/emojis/EmojiActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/emojis/EmojiActionCreators.tsx");

export const toggleGuildExpandedState = function toggleGuildExpandedState(guildId) {
  const obj = DispatcherDefault;
  const obj2 = { type: "TOGGLE_GUILD_EXPANDED_STATE", guildId };
  obj.dispatch(obj2);
};
export const initiateEmojiInteraction = function initiateEmojiInteraction(AutocompleteWrapperShown) {
  const obj = DispatcherDefault;
  const obj2 = { type: "EMOJI_INTERACTION_INITIATED", interaction: AutocompleteWrapperShown };
  obj.dispatch(obj2);
};
