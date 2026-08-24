// === Module 13355: useFilteredGuilds ===

// Module 13355 (useFilteredGuilds)
import closure_3 from "noop" /* 19 */;
import closure_4 from "createGuildRecordFromRust" /* 1910 */;
import closure_5 from "insertUnsortedGuilds" /* 5078 */;
import closure_6 from "mergeGuildAvatar" /* 1922 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/guild_settings_picker/useFilteredGuilds.tsx");

export default function useFilteredGuilds(isGuildIncluded) {
  isGuildIncluded = isGuildIncluded.isGuildIncluded;
  const selectedGuildId = isGuildIncluded.selectedGuildId;
  let stateFromStores;
  let stateFromStores1;
  let stateFromStores2;
  let obj = isGuildIncluded(stateFromStores1[4]);
  let items = [closure_5];
  stateFromStores = obj.useStateFromStores(items, () => flattenedGuildIds.getFlattenedGuildIds());
  const items1 = [closure_4];
  stateFromStores1 = isGuildIncluded(stateFromStores1[4]).useStateFromStores(items1, () => guilds.getGuilds());
  const obj2 = isGuildIncluded(stateFromStores1[4]);
  const items2 = [closure_6];
  stateFromStores2 = isGuildIncluded(stateFromStores1[4]).useStateFromStores(items2, () => currentUser.getCurrentUser());
  obj = {
    options: stateFromStores2.useMemo(() => {
      if (null == stateFromStores2) {
        let items = [];
      } else {
        if (null == isGuildIncluded) {
          let found = stateFromStores;
        } else {
          found = stateFromStores.filter((arg0) => {
            closure_1_1(closure_1_2[5])(null != dependencyMap[arg0], "guild should not be null");
            return callback(dependencyMap[arg0], closure_3);
          });
        }
        items = found.map((id) => {
          closure_1_1(closure_1_2[5])(null != dependencyMap[id], "guild should not be null");
          return { id, label: dependencyMap[id].name, value: dependencyMap[id].id };
        });
      }
      return items;
    }, items3),
    selectedGuild: null
  };
  items3 = [stateFromStores, stateFromStores1, stateFromStores2, isGuildIncluded];
  let tmp4;
  if (null != selectedGuildId) {
    tmp4 = stateFromStores1[selectedGuildId];
  }
  obj[1] = tmp4;
  return obj;
};