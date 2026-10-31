// === Module 12657: useConjurePublishedServerName ===

// Module 12657 (useConjurePublishedServerName)
import GuildStore from "GuildStore" /* 4885 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6844 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/publish/useConjurePublishedServerName.tsx");

export default function useConjurePublishedServerName(arg0) {
  _require = arg0;
  const items = [ConjureProjectStore, GuildStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    const project = ConjureProjectStore.getProject(closure_0);
    let tmp2 = null;
    if (null != project) {
      tmp2 = null;
      if ("user" !== project.install_scope) {
        tmp2 = null;
        if (null != project.guild_id) {
          let guild = GuildStore.getGuild(project.guild_id);
          if (guild == null) {
            guild = null;
          }
          tmp2 = guild;
        }
      }
    }
    return tmp2;
  });
  let tmp2 = null;
  if (null != stateFromStores) {
    ({ id: obj2.guildId, name: obj2.name } = stateFromStores);
    tmp2 = { guildId: null, name: null };
    const obj3 = { guildId: null, name: null };
  }
  return tmp2;
};