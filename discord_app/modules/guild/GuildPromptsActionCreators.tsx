import { dispatcher } from "../../Dispatcher.tsx";
// discord_app/modules/guild/GuildPromptsActionCreators.tsx
function viewPrompt(REAL_NAME_PROMPT, closure_0) {
  const importDefault = REAL_NAME_PROMPT;
  const dependencyMap = closure_0;
  dispatcher.wait(() => {
    let obj = REAL_NAME_PROMPT(table[0]);
    obj = { type: "GUILD_PROMPT_VIEWED", prompt: REAL_NAME_PROMPT, guildId: table };
    obj.dispatch(obj);
  });
}
const result = require("set").fileFinishedImporting("modules/guild/GuildPromptsActionCreators.tsx");

export default { viewPrompt };
export { viewPrompt };