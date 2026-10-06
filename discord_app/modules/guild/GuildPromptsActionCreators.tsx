// === Module 12462: GuildPromptsActionCreators ===

// Module 12462 (GuildPromptsActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

let dependencyMap, importDefault;

function viewPrompt(REAL_NAME_PROMPT, guildId) {
  let _prompt;
  importDefault = REAL_NAME_PROMPT;
  dependencyMap = guildId;
  let obj = DispatcherDefault;
  obj.wait(() => {
    const obj = DispatcherDefault;
    const obj2 = { type: "GUILD_PROMPT_VIEWED", prompt: _prompt, guildId };
    obj.dispatch(obj2);
  });
}
const result = size.fileFinishedImporting("modules/guild/GuildPromptsActionCreators.tsx");

export default { viewPrompt };
export { viewPrompt };