// discord_app/modules/soundboard/useGuildIdsToFetchSoundsFor.tsx
import set from "../../../_runtime/00002_set.js";
import noop from "../../../_runtime/00019_noop.js";
import closure_3 from "../../stores/GuildStore.tsx";
import closure_4 from "SoundboardStore.tsx";

const useMemo = noop.useMemo;
const result = set.fileFinishedImporting("modules/soundboard/useGuildIdsToFetchSoundsFor.tsx");

export const useGuildIdsToFetchSoundsFor = function useGuildIdsToFetchSoundsFor() {
  const items = [closure_3];
  stateFromStoresArray = stateFromStoresArray(stateFromStores[3]).useStateFromStoresArray(items, () =>
    guildIds.getGuildIds(),
  );
  const obj = stateFromStoresArray(stateFromStores[3]);
  const items1 = [closure_4];
  stateFromStores = stateFromStoresArray(stateFromStores[3]).useStateFromStores(items1, () => sounds.getSounds());
  const items2 = [stateFromStoresArray, stateFromStores];
  return useMemo(() => {
    stateFromStoresArray = stateFromStores;
    return stateFromStoresArray.filter((arg0) => null == closure_0.get(arg0));
  }, items2);
};
export const getGuildIdsToFetchSoundsFor = function getGuildIdsToFetchSoundsFor() {
  guildIds = guildIds.getGuildIds();
  const sounds2 = sounds.getSounds();
  return guildIds.filter((arg0) => null == closure_0.get(arg0));
};
