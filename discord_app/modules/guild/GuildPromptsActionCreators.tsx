// discord_app/modules/guild/GuildPromptsActionCreators.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import dispatcherDefault from "../../Dispatcher.tsx";

function viewPrompt(REAL_NAME_PROMPT, closure_0) {
  importDefault = REAL_NAME_PROMPT;
  dependencyMap = closure_0;
  dispatcherDefault.wait(() => {
    REAL_NAME_PROMPT(table[0]);
    const obj = { type: "GUILD_PROMPT_VIEWED", prompt: REAL_NAME_PROMPT, guildId: table };
    obj.dispatch(obj);
  });
}
const result = obj132.fileFinishedImporting("modules/guild/GuildPromptsActionCreators.tsx");

export default { viewPrompt };
export { viewPrompt };