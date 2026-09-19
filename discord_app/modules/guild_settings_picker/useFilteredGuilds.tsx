// === Module 14157: useFilteredGuilds ===

// Module 14157 (useFilteredGuilds)
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2063 */;
import SortedGuildStore from "SortedGuildStore" /* 5650 */;
import UserStore from "UserStore" /* 1372 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings_picker/useFilteredGuilds.tsx");

export default function useFilteredGuilds(isGuildIncluded) {
  isGuildIncluded = isGuildIncluded.isGuildIncluded;
  const selectedGuildId = isGuildIncluded.selectedGuildId;
  let stateFromStores1;
  let items = [SortedGuildStore];
  const stateFromStores = isGuildIncluded(stateFromStores1[4]).useStateFromStores(items, () => flattenedGuildIds.getFlattenedGuildIds());
  const obj = isGuildIncluded(stateFromStores1[4]);
  const items1 = [GuildStore];
  stateFromStores1 = isGuildIncluded(stateFromStores1[4]).useStateFromStores(items1, () => guilds.getGuilds());
  const obj2 = isGuildIncluded(stateFromStores1[4]);
  const items2 = [UserStore];
  const stateFromStores2 = isGuildIncluded(stateFromStores1[4]).useStateFromStores(items2, () => currentUser.getCurrentUser());
  const obj4 = { options: null, selectedGuild: null };
  const items3 = [stateFromStores, stateFromStores1, stateFromStores2, isGuildIncluded];
  obj4.options = stateFromStores2.useMemo(() => {
    if (null == stateFromStores2) {
      let items = [];
    } else {
      if (null == isGuildIncluded) {
        let found = stateFromStores;
      } else {
        found = stateFromStores.filter((item) => {
          stateFromStores(stateFromStores1[5])(null != dependencyMap[item], "guild should not be null");
          return isGuildIncluded(dependencyMap[item], stateFromStores2);
        });
      }
      items = found.map((id) => {
        stateFromStores(stateFromStores1[5])(null != dependencyMap[id], "guild should not be null");
        return { id, label: dependencyMap[id].name, value: dependencyMap[id].id };
      });
    }
    return items;
  }, items3);
  let tmp4;
  if (null != selectedGuildId) {
    tmp4 = stateFromStores1[selectedGuildId];
  }
  obj4.selectedGuild = tmp4;
  return obj4;
};