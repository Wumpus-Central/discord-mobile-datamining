// discord_app/modules/guild/GuildPromptsActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import size from "../../../_runtime/metro/00002__.js";

function viewPrompt(REAL_NAME_PROMPT, guildId) {
  DispatcherDefault.dispatch({ type: "GUILD_PROMPT_VIEWED", prompt: REAL_NAME_PROMPT, guildId });
}
const result = size.fileFinishedImporting("modules/guild/GuildPromptsActionCreators.tsx");

export default { viewPrompt };
export { viewPrompt };
