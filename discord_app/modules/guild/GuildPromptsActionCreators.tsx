// === Module 11825: viewPrompt ===

// Module 11825 (viewPrompt)
import obj132 from "obj132" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;

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