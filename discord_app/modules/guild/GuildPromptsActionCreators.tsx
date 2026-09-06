// discord_app/modules/guild/GuildPromptsActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import size from "../../../_runtime/metro/00002__.js";

function viewPrompt(REAL_NAME_PROMPT, guildId) {
  importDefault = REAL_NAME_PROMPT;
  dependencyMap = guildId;
  DispatcherDefault.wait(() => {
    const obj = { type: "GUILD_PROMPT_VIEWED", prompt: _prompt, guildId };
    obj.dispatch(obj);
  });
}
const result = size.fileFinishedImporting("modules/guild/GuildPromptsActionCreators.tsx");

export default { viewPrompt };
export { viewPrompt };
