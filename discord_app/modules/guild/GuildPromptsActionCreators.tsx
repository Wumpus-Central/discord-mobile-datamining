// === Module 12545: GuildPromptsActionCreators ===

// Module 12545 (GuildPromptsActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

function viewPrompt(REAL_NAME_PROMPT, guildId) {
  DispatcherDefault.dispatch({ type: "GUILD_PROMPT_VIEWED", prompt: REAL_NAME_PROMPT, guildId });
}
const result = size.fileFinishedImporting("modules/guild/GuildPromptsActionCreators.tsx");

export default { viewPrompt };
export { viewPrompt };