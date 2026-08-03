import noop from "noop";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import insertUnsortedGuilds from "insertUnsortedGuilds";
import mergeGuildAvatar from "mergeGuildAvatar";

const require = arg1;
const result = require("insertUnsortedGuilds").fileFinishedImporting("modules/guild_settings_picker/useFilteredGuilds.tsx");

export default function useFilteredGuilds(isGuildIncluded) {
  isGuildIncluded = isGuildIncluded.isGuildIncluded;
  const selectedGuildId = isGuildIncluded.selectedGuildId;
  let stateFromStores;
  let stateFromStores1;
  let stateFromStores2;
  let obj = isGuildIncluded(stateFromStores1[4]);
  let items = [insertUnsortedGuilds];
  stateFromStores = obj.useStateFromStores(items, () => flattenedGuildIds.getFlattenedGuildIds());
  const items1 = [createGuildRecordFromRust];
  stateFromStores1 = isGuildIncluded(stateFromStores1[4]).useStateFromStores(items1, () => guilds.getGuilds());
  const obj2 = isGuildIncluded(stateFromStores1[4]);
  const items2 = [mergeGuildAvatar];
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
            outer1_1(outer1_2[5])(null != dependencyMap[arg0], "guild should not be null");
            return callback(dependencyMap[arg0], noop);
          });
        }
        items = found.map((id) => {
          outer1_1(outer1_2[5])(null != dependencyMap[id], "guild should not be null");
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