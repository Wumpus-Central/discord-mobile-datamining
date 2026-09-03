// === Module 12426: viewPrompt ===

// Module 12426 (viewPrompt)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 706 */;

function viewPrompt(REAL_NAME_PROMPT, closure_0) {
  importDefault = REAL_NAME_PROMPT;
  dependencyMap = closure_0;
  dispatcherDefault.wait(() => {
    let obj = REAL_NAME_PROMPT(table[0]);
    obj = { type: "GUILD_PROMPT_VIEWED", prompt: REAL_NAME_PROMPT, guildId: table };
    obj.dispatch(obj);
  });
}
const result = set.fileFinishedImporting("modules/guild/GuildPromptsActionCreators.tsx");

export default { viewPrompt };
export { viewPrompt };