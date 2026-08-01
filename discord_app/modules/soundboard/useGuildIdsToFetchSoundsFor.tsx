// === Module 8052: useGuildIdsToFetchSoundsFor ===

// Module 8052 (useGuildIdsToFetchSoundsFor)
import { useMemo } from "noop";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import handleSoundCreateOrUpdate from "handleSoundCreateOrUpdate";

const result = require("handleSoundCreateOrUpdate").fileFinishedImporting("modules/soundboard/useGuildIdsToFetchSoundsFor.tsx");

export const useGuildIdsToFetchSoundsFor = function useGuildIdsToFetchSoundsFor() {
  const items = [createGuildRecordFromRust];
  stateFromStoresArray = stateFromStoresArray(stateFromStores[3]).useStateFromStoresArray(items, () => guildIds.getGuildIds());
  const obj = stateFromStoresArray(stateFromStores[3]);
  const items1 = [handleSoundCreateOrUpdate];
  stateFromStores = stateFromStoresArray(stateFromStores[3]).useStateFromStores(items1, () => sounds.getSounds());
  const items2 = [stateFromStoresArray, stateFromStores];
  return useMemo(() => {
    const stateFromStoresArray = stateFromStores;
    return stateFromStoresArray.filter((arg0) => null == closure_0.get(arg0));
  }, items2);
};
export const getGuildIdsToFetchSoundsFor = function getGuildIdsToFetchSoundsFor() {
  guildIds = guildIds.getGuildIds();
  const sounds2 = sounds.getSounds();
  return guildIds.filter((arg0) => null == closure_0.get(arg0));
};