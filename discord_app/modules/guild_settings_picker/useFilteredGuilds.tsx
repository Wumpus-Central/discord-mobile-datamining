// === Module 13355: useFilteredGuilds ===

// Module 13355 (useFilteredGuilds)
import noop from "noop" /* 19 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import insertUnsortedGuilds from "insertUnsortedGuilds" /* 5078 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/guild_settings_picker/useFilteredGuilds.tsx");

export default function useFilteredGuilds(isGuildIncluded) {
  isGuildIncluded = isGuildIncluded.isGuildIncluded;
  const selectedGuildId = isGuildIncluded.selectedGuildId;
  let stateFromStores1;
  let obj = isGuildIncluded(stateFromStores1[4]);
  let items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => flattenedGuildIds.getFlattenedGuildIds());
  const items1 = [closure_4];
  stateFromStores1 = isGuildIncluded(stateFromStores1[4]).useStateFromStores(items1, () => guilds.getGuilds());
  const obj2 = isGuildIncluded(stateFromStores1[4]);
  const items2 = [closure_6];
  const stateFromStores2 = isGuildIncluded(stateFromStores1[4]).useStateFromStores(items2, () => currentUser.getCurrentUser());
  obj = {
    options: stateFromStores2.useMemo(() => {
      if (null == stateFromStores2) {
        let items = [];
      } else {
        if (null == isGuildIncluded) {
          let found = stateFromStores;
        } else {
          found = stateFromStores.filter((item, index) => {
            stateFromStores(stateFromStores1[5])(null != dependencyMap[item], "guild should not be null");
            return callback(dependencyMap[item], closure_3);
          });
        }
        items = found.map((item, index) => {
          stateFromStores(stateFromStores1[5])(null != dependencyMap[item], "guild should not be null");
          return { id: item, label: dependencyMap[item].name, value: dependencyMap[item].id };
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