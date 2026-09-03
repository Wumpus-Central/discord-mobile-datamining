// === Module 6194: useGuildIdsToFetchSoundsFor ===

// Module 6194 (useGuildIdsToFetchSoundsFor)
import set from "set" /* 2 */;
import noop from "noop" /* 19 */;
import closure_3 from "createGuildRecordFromRust" /* 1908 */;
import closure_4 from "handleSoundCreateOrUpdate" /* 4966 */;

const useMemo = noop.useMemo;
const result = set.fileFinishedImporting("modules/soundboard/useGuildIdsToFetchSoundsFor.tsx");

export const useGuildIdsToFetchSoundsFor = function useGuildIdsToFetchSoundsFor() {
  const items = [closure_3];
  stateFromStoresArray = stateFromStoresArray(stateFromStores[3]).useStateFromStoresArray(items, () => guildIds.getGuildIds());
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