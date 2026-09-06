// discord_app/modules/guild_settings_picker/useFilteredGuilds.tsx
import noop from "../../../_runtime/metro/00019__.js";
import GuildStore from "../../stores/GuildStore.tsx";
import SortedGuildStore from "../../stores/SortedGuildStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings_picker/useFilteredGuilds.tsx");

export default function useFilteredGuilds(isGuildIncluded) {
  isGuildIncluded = isGuildIncluded.isGuildIncluded;
  const selectedGuildId = isGuildIncluded.selectedGuildId;
  let stateFromStores1;
  let obj = isGuildIncluded(stateFromStores1[4]);
  let items = [SortedGuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => flattenedGuildIds.getFlattenedGuildIds());
  const items1 = [GuildStore];
  stateFromStores1 = isGuildIncluded(stateFromStores1[4]).useStateFromStores(items1, () => guilds.getGuilds());
  const obj2 = isGuildIncluded(stateFromStores1[4]);
  const items2 = [UserStore];
  const stateFromStores2 = isGuildIncluded(stateFromStores1[4]).useStateFromStores(items2, () =>
    currentUser.getCurrentUser(),
  );
  obj = { options: null, selectedGuild: null };
  const items3 = [stateFromStores, stateFromStores1, stateFromStores2, isGuildIncluded];
  obj.options = stateFromStores2.useMemo(() => {
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
  obj.selectedGuild = tmp4;
  return obj;
}
