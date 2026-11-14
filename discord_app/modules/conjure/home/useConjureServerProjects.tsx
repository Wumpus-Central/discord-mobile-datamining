// === Module 13980: useConjureServerProjects ===

// Module 13980 (useConjureServerProjects)
import ConjureProjectStore from "ConjureProjectStore" /* 7017 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/home/useConjureServerProjects.tsx");

export default function useConjureServerProjects(arg0) {
  _require = arg0;
  const obj = { mine: null, shared: null, fetchState: null };
  items = [arg0];
  obj.mine = require("useConjureHomeOwnProjects").useConjureProjectsByActivity(() => {
    const ownedProjects = ConjureProjectStore.getOwnedProjects();
    return ownedProjects.filter((guild_id) => {
      let tmp2 = guild_id.guild_id === closure_1_0 || guild_id.preview_guild_id === closure_1_0;
      if (!tmp2) {
        const guild_ids = guild_id.guild_ids;
        let hasItem;
        if (guild_ids != null) {
          hasItem = guild_ids.includes(closure_1_0);
        }
        tmp2 = true === hasItem;
      }
      return tmp2;
    });
  }, items);
  const obj2 = require("useConjureHomeOwnProjects");
  const items1 = [arg0];
  obj.shared = require("useConjureHomeOwnProjects").useConjureProjectsByActivity(() => ConjureProjectStore.getSharedProjects(closure_0), items1);
  const obj3 = require("useConjureHomeOwnProjects");
  const items2 = [ConjureProjectStore];
  const items3 = [arg0];
  obj.fetchState = require("initialize").useStateFromStores(items2, () => ConjureProjectStore.getGuildProjectsFetchState(closure_0), items3);
  return obj;
};
export function conjureProjectPointsAtGuild(guild_id, arg1) {
  let tmp = guild_id.guild_id === arg1 || guild_id.preview_guild_id === arg1;
  if (!tmp) {
    const guild_ids = guild_id.guild_ids;
    let hasItem;
    if (guild_ids != null) {
      hasItem = guild_ids.includes(arg1);
    }
    tmp = true === hasItem;
  }
  return tmp;
}