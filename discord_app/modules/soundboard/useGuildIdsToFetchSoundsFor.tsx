// === Module 7340: useGuildIdsToFetchSoundsFor ===

// Module 7340 (useGuildIdsToFetchSoundsFor)
import _mod19 from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 1979 */;
import SoundboardStore from "SoundboardStore" /* 5012 */;
import size from "module_2" /* 2 */;

const useMemo = _mod19.useMemo;
const result = size.fileFinishedImporting("modules/soundboard/useGuildIdsToFetchSoundsFor.tsx");

export const useGuildIdsToFetchSoundsFor = function useGuildIdsToFetchSoundsFor() {
  const items = [GuildStore];
  stateFromStoresArray = stateFromStoresArray(stateFromStores[3]).useStateFromStoresArray(items, () => guildIds.getGuildIds());
  const obj = stateFromStoresArray(stateFromStores[3]);
  const items1 = [SoundboardStore];
  stateFromStores = stateFromStoresArray(stateFromStores[3]).useStateFromStores(items1, () => sounds.getSounds());
  const items2 = [stateFromStoresArray, stateFromStores];
  return useMemo(() => {
    closure_0 = stateFromStores;
    return stateFromStoresArray.filter((item) => null == closure_0.get(item));
  }, items2);
};
export const getGuildIdsToFetchSoundsFor = function getGuildIdsToFetchSoundsFor() {
  const guildIds = GuildStore.getGuildIds();
  const sounds = SoundboardStore.getSounds();
  return guildIds.filter((item) => null == closure_0.get(item));
};