// === Module 7044: useGuildIdsToFetchSoundsFor ===

// Module 7044 (useGuildIdsToFetchSoundsFor)
import _mod19 from "module_19" /* 19 */;
import useStateFromStores from "useStateFromStores" /* 573 */;
import c from "c" /* 576 */;
import GuildStore from "GuildStore" /* 2086 */;
import SoundboardStore from "SoundboardStore" /* 5425 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const useMemo = _mod19.useMemo;
const result = size.fileFinishedImporting("modules/soundboard/useGuildIdsToFetchSoundsFor.tsx");

export const useGuildIdsToFetchSoundsFor = ReactCompilerGating.isReactCompilerEnabled() ? (function useGuildIdsToFetchSoundsFor() {
  const cResult = c.c(7);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    const fn = function s() {
      return guildIds.getGuildIds();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStoresArray = useStateFromStores.useStateFromStoresArray(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [SoundboardStore];
    const fn2 = function c() {
      return sounds.getSounds();
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    let tmp8 = fn2;
    let tmp7 = items1;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = useStateFromStores;
  const stateFromStores = useStateFromStores.useStateFromStores(tmp7, tmp8);
  if (cResult[4] === stateFromStoresArray) {
    if (cResult[5] === stateFromStores) {
      let tmp11 = cResult[6];
    }
    return tmp11;
  }
  const found = stateFromStoresArray.filter((item) => null == closure_0.get(item));
  cResult[4] = stateFromStoresArray;
  cResult[5] = stateFromStores;
  cResult[6] = found;
  tmp11 = found;
  const tmpResult2 = useStateFromStores;
}) : (function useGuildIdsToFetchSoundsFor() {
  const items = [GuildStore];
  stateFromStoresArray = stateFromStoresArray(stateFromStores[5]).useStateFromStoresArray(items, () => guildIds.getGuildIds());
  const obj = stateFromStoresArray(stateFromStores[5]);
  const items1 = [SoundboardStore];
  stateFromStores = stateFromStoresArray(stateFromStores[5]).useStateFromStores(items1, () => sounds.getSounds());
  const items2 = [stateFromStoresArray, stateFromStores];
  return useMemo(() => {
    closure_0 = stateFromStores;
    return stateFromStoresArray.filter((item) => null == closure_0.get(item));
  }, items2);
});
export const getGuildIdsToFetchSoundsFor = function getGuildIdsToFetchSoundsFor() {
  const guildIds = GuildStore.getGuildIds();
  const sounds = SoundboardStore.getSounds();
  return guildIds.filter((item) => null == closure_0.get(item));
};