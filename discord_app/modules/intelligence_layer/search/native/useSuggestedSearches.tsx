// === Module 16805: useSuggestedSearches ===

// Module 16805 (useSuggestedSearches)
import SuggestedSearchStore from "SuggestedSearchStore" /* 12004 */;

const require = globalThis.__r;

const require = fn;
const EMPTY_SUGGESTED_SEARCHES = fn(12004).EMPTY_SUGGESTED_SEARCHES;
let closure_4 = fn(11988).SUGGESTED_SEARCHES_WINDOW_SIZE;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/useSuggestedSearches.tsx");

export const useSuggestedSearches = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId, arg1) => {
  _require = guildId;
  const cResult = require("c").c(13);
  const obj = require("c");
  guildId = undefined;
  if (guildId != null) {
    guildId = guildId.guildId;
  }
  isNlpSearchEnabled = require("SmartSearchExperiments").useIsNlpSearchEnabled(guildId, arg1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SuggestedSearchStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === isNlpSearchEnabled) {
    if (cResult[2] === guildId) {
      let tmp8 = cResult[3];
      let tmp9 = cResult[4];
    }
    const stateFromStoresArray = tmp(tmp2[5]).useStateFromStoresArray(first, tmp8, tmp9);
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [SuggestedSearchStore];
      cResult[5] = items1;
      let tmp11 = items1;
    } else {
      tmp11 = cResult[5];
    }
    if (cResult[6] === isNlpSearchEnabled) {
      if (cResult[7] === guildId) {
        let tmp13 = cResult[8];
        let tmp14 = cResult[9];
      }
      const stateFromStores = tmp(tmp2[5]).useStateFromStores(tmp11, tmp13, tmp14);
      if (cResult[10] === stateFromStores) {
        if (cResult[11] === stateFromStoresArray) {
          let tmp16 = cResult[12];
        }
        return tmp16;
      }
      const obj3 = { suggestedSearches: stateFromStoresArray, isLoadingSuggestedSearches: stateFromStores };
      class E {
        constructor() {
          tmp = closure_0;
          if (null != closure_0) {
            tmp2 = closure_1;
            if (closure_1) {
              tmp3 = closure_2;
              return closure_2.isLoadingSuggestedSearches(tmp.guildId, tmp.channelIds);
            }
          }
          return false;
        }
      }
      cResult[10] = stateFromStores;
      cResult[11] = stateFromStoresArray;
      cResult[12] = obj3;
      tmp16 = obj3;
      const tmpResult2 = tmp(tmp2[5]);
    }
    class E {
      constructor() {
        tmp = closure_0;
        if (null != closure_0) {
          tmp2 = closure_1;
          if (closure_1) {
            tmp3 = closure_2;
            return closure_2.isLoadingSuggestedSearches(tmp.guildId, tmp.channelIds);
          }
        }
        return false;
      }
    }
    const items2 = [guildId, isNlpSearchEnabled];
    cResult[6] = isNlpSearchEnabled;
    cResult[7] = guildId;
    cResult[8] = E;
    cResult[9] = items2;
    tmp14 = items2;
    tmp13 = E;
    const tmpResult = tmp(tmp2[5]);
  }
  const fn = function c() {
    if (null != guildId) {
      if (isNlpSearchEnabled) {
        return SuggestedSearchStore.getNextSuggestions(guildId.guildId, guildId.channelIds, closure_4);
      }
    }
    return EMPTY_SUGGESTED_SEARCHES;
  };
  const items3 = [guildId, isNlpSearchEnabled];
  cResult[1] = isNlpSearchEnabled;
  cResult[2] = guildId;
  cResult[3] = fn;
  cResult[4] = items3;
  tmp9 = items3;
  tmp8 = fn;
  const obj2 = require("SmartSearchExperiments");
}) : ((guildId, arg1) => {
  _require = guildId;
  guildId = undefined;
  if (guildId != null) {
    guildId = guildId.guildId;
  }
  isNlpSearchEnabled = require("SmartSearchExperiments").useIsNlpSearchEnabled(guildId, arg1);
  const obj2 = { suggestedSearches: null, isLoadingSuggestedSearches: null };
  const obj = require("SmartSearchExperiments");
  const items = [SuggestedSearchStore];
  const items1 = [guildId, isNlpSearchEnabled];
  obj2.suggestedSearches = require("initialize").useStateFromStoresArray(items, () => {
    if (null != guildId) {
      if (isNlpSearchEnabled) {
        return SuggestedSearchStore.getNextSuggestions(guildId.guildId, guildId.channelIds, closure_4);
      }
    }
    return EMPTY_SUGGESTED_SEARCHES;
  }, items1);
  const tmpResult = require("initialize");
  const items2 = [SuggestedSearchStore];
  const items3 = [guildId, isNlpSearchEnabled];
  obj2.isLoadingSuggestedSearches = require("initialize").useStateFromStores(items2, () => {
    if (null != guildId) {
      if (isNlpSearchEnabled) {
        return SuggestedSearchStore.isLoadingSuggestedSearches(guildId.guildId, guildId.channelIds);
      }
    }
    return false;
  }, items3);
  return obj2;
});