// discord_app/modules/conjure/home/useConjureServerProjects.tsx
import ConjureProjectStore from "../projects/ConjureProjectStore.tsx";

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
    return ownedProjects.filter((guild_id) => guild_id.guild_id === closure_1_0 || guild_id.preview_guild_id === tmp);
  }, items);
  const obj2 = require("useConjureHomeOwnProjects");
  const items1 = [arg0];
  obj.shared = require("useConjureHomeOwnProjects").useConjureProjectsByActivity(
    () => ConjureProjectStore.getSharedProjects(closure_0),
    items1,
  );
  const obj3 = require("useConjureHomeOwnProjects");
  const items2 = [ConjureProjectStore];
  const items3 = [arg0];
  obj.fetchState = require("initialize").useStateFromStores(
    items2,
    () => ConjureProjectStore.getGuildProjectsFetchState(closure_0),
    items3,
  );
  return obj;
}
export function conjureProjectPointsAtGuild(guild_id, arg1) {
  return guild_id.guild_id === arg1 || guild_id.preview_guild_id === arg1;
}
