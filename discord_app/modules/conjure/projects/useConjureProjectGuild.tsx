// === Module 18725: useConjureProjectGuild ===

// Module 18725 (useConjureProjectGuild)
import GuildStore from "GuildStore" /* 4883 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6903 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/projects/useConjureProjectGuild.tsx");

export default function useConjureProjectGuild(arg0) {
  _require = arg0;
  items = [ConjureProjectStore, GuildStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    const project = ConjureProjectStore.getProject(closure_0);
    let guild_id;
    if (project != null) {
      guild_id = project.guild_id;
    }
    let tmp3 = null;
    if (null != guild_id) {
      guild = GuildStore.getGuild(guild_id);
      if (guild == null) {
        guild = null;
      }
      tmp3 = guild;
    }
    return tmp3;
  }, items1);
};