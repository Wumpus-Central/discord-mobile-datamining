// === Module 17255: useSuggestedSearches ===

// Module 17255 (useSuggestedSearches)
import SearchSessionAnalyticsManagerDefault from "SearchSessionAnalyticsManager" /* 12012 */;
import SmartSearchAnalyticsManagerDefault from "SmartSearchAnalyticsManager" /* 12014 */;
import noop from "module_19" /* 19 */;
import SuggestedSearchStore from "SuggestedSearchStore" /* 11991 */;

const require = globalThis.__r;

const require = fn;
const EMPTY_SUGGESTED_SEARCHES = fn(11991).EMPTY_SUGGESTED_SEARCHES;
let closure_6 = fn(11992).SUGGESTED_SEARCHES_WINDOW_SIZE;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/intelligence_layer/search/native/useSuggestedSearches.tsx");

export const useSuggestedSearches = ReactCompilerGating.isReactCompilerEnabled() ? (function useSuggestedSearches(guildId, source) {
  const _require = guildId;
  const cResult = require("c").c(19);
  source = source.source;
  const trackShown = source.trackShown;
  dependencyMap = tmp4;
  let obj = require("c");
  guildId = undefined;
  if (guildId != null) {
    guildId = guildId.guildId;
  }
  const isNlpSearchEnabled = require("SmartSearchExperiments").useIsNlpSearchEnabled(guildId, source);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [stateFromStoresArray];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === isNlpSearchEnabled) {
    if (cResult[2] === guildId) {
      let tmp9 = cResult[3];
      let tmp10 = cResult[4];
    }
    stateFromStoresArray = tmp(504).useStateFromStoresArray(first, tmp9, tmp10);
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [stateFromStoresArray];
      cResult[5] = items1;
      let tmp12 = items1;
    } else {
      tmp12 = cResult[5];
    }
    if (cResult[6] === isNlpSearchEnabled) {
      if (cResult[7] === guildId) {
        let tmp14 = cResult[8];
        let tmp15 = cResult[9];
      }
      const stateFromStores = tmp(504).useStateFromStores(tmp12, tmp14, tmp15);
      if (cResult[10] === guildId) {
        if (cResult[11] === source) {
          if (cResult[12] === stateFromStoresArray) {
            if (cResult[13] === tmp4) {
              let tmp17 = cResult[14];
              let tmp18 = cResult[15];
            }
            const effect = isNlpSearchEnabled.useEffect(tmp17, tmp18);
            if (cResult[16] === stateFromStores) {
              if (cResult[17] === stateFromStoresArray) {
                let tmp21 = cResult[18];
              }
              return tmp21;
            }
            class F {
              constructor() {
                tmp = trackShown;
                if (trackShown) {
                  tmp2 = closure_0;
                  tmp3 = null;
                  tmp = null != closure_0;
                }
                if (tmp) {
                  tmp4 = closure_4;
                  num = 0;
                  tmp = 0 !== closure_4.length;
                }
                if (tmp) {
                  tmp5 = closure_1;
                  tmp6 = closure_2;
                  obj = closure_1(closure_2[7]);
                  obj1 = { smartSearchQuery: null, suggestedSearches: null, suggestionSource: null };
                  tmp7 = closure_0;
                  obj1.smartSearchQuery = closure_0;
                  tmp8 = closure_4;
                  obj1.suggestedSearches = closure_4;
                  tmp9 = source;
                  obj1.suggestionSource = source;
                  result = obj.trackSuggestedSearchesShownDeduped(obj1, closure_1(closure_2[8]));
                }
                return;
              }
            }
            tmp22[0] = stateFromStoresArray;
            tmp22[1] = stateFromStores;
            class I {
              constructor() {
                tmp2 = null == closure_0;
                tmp = closure_0;
                if (!tmp2) {
                  tmp3 = closure_3;
                  tmp2 = !closure_3;
                }
                result = !tmp2;
                if (!tmp2) {
                  tmp5 = closure_4;
                  result = closure_4.isLoadingSuggestedSearches(tmp);
                }
                return result;
              }
            }
            cResult[17] = stateFromStoresArray;
            cResult[18] = tmp22;
            tmp21 = tmp22;
          }
        }
      }
      class F {
        constructor() {
          tmp = trackShown;
          if (trackShown) {
            tmp2 = closure_0;
            tmp3 = null;
            tmp = null != closure_0;
          }
          if (tmp) {
            tmp4 = closure_4;
            num = 0;
            tmp = 0 !== closure_4.length;
          }
          if (tmp) {
            tmp5 = closure_1;
            tmp6 = closure_2;
            obj = closure_1(closure_2[7]);
            obj1 = { smartSearchQuery: null, suggestedSearches: null, suggestionSource: null };
            tmp7 = closure_0;
            obj1.smartSearchQuery = closure_0;
            tmp8 = closure_4;
            obj1.suggestedSearches = closure_4;
            tmp9 = source;
            obj1.suggestionSource = source;
            result = obj.trackSuggestedSearchesShownDeduped(obj1, closure_1(closure_2[8]));
          }
          return;
        }
      }
      const items2 = [stateFromStoresArray, guildId, , ];
      class I {
        constructor() {
          tmp2 = null == closure_0;
          tmp = closure_0;
          if (!tmp2) {
            tmp3 = closure_3;
            tmp2 = !closure_3;
          }
          result = !tmp2;
          if (!tmp2) {
            tmp5 = closure_4;
            result = closure_4.isLoadingSuggestedSearches(tmp);
          }
          return result;
        }
      }
      items2[3] = tmp4;
      cResult[10] = guildId;
      cResult[11] = source;
      cResult[12] = stateFromStoresArray;
      cResult[13] = tmp4;
      cResult[14] = F;
      cResult[15] = items2;
      tmp18 = items2;
      tmp17 = F;
      const tmpResult4 = tmp(504);
    }
    class I {
      constructor() {
        tmp2 = null == closure_0;
        tmp = closure_0;
        if (!tmp2) {
          tmp3 = closure_3;
          tmp2 = !closure_3;
        }
        result = !tmp2;
        if (!tmp2) {
          tmp5 = closure_4;
          result = closure_4.isLoadingSuggestedSearches(tmp);
        }
        return result;
      }
    }
    const items3 = [guildId, isNlpSearchEnabled];
    cResult[6] = isNlpSearchEnabled;
    cResult[7] = guildId;
    cResult[8] = I;
    cResult[9] = items3;
    tmp15 = items3;
    tmp14 = I;
    const tmpResult3 = tmp(504);
  }
  const fn = function l() {
    if (null != closure_0) {
      if (isNlpSearchEnabled) {
        let nextSuggestions = SuggestedSearchStore.getNextSuggestions(tmp, closure_6);
      }
      return nextSuggestions;
    }
    nextSuggestions = EMPTY_SUGGESTED_SEARCHES;
  };
  const items4 = [guildId, isNlpSearchEnabled];
  cResult[1] = isNlpSearchEnabled;
  cResult[2] = guildId;
  cResult[3] = fn;
  cResult[4] = items4;
  tmp10 = items4;
  tmp9 = fn;
}) : (function useSuggestedSearches(guildId, source) {
  const _require = guildId;
  source = source.source;
  const trackShown = source.trackShown;
  dependencyMap = tmp;
  guildId = undefined;
  if (guildId != null) {
    guildId = guildId.guildId;
  }
  const isNlpSearchEnabled = require("SmartSearchExperiments").useIsNlpSearchEnabled(guildId, source);
  let obj = require("SmartSearchExperiments");
  const items = [suggestedSearches];
  const items1 = [guildId, isNlpSearchEnabled];
  suggestedSearches = require("initialize").useStateFromStoresArray(items, () => {
    if (null != closure_0) {
      if (isNlpSearchEnabled) {
        let nextSuggestions = SuggestedSearchStore.getNextSuggestions(tmp, closure_6);
      }
      return nextSuggestions;
    }
    nextSuggestions = EMPTY_SUGGESTED_SEARCHES;
  }, items1);
  const tmp2Result = require("initialize");
  const items2 = [suggestedSearches];
  const items3 = [guildId, isNlpSearchEnabled];
  const items4 = [suggestedSearches, guildId, source, undefined !== trackShown && trackShown];
  const isLoadingSuggestedSearches = require("initialize").useStateFromStores(items2, () => {
    let tmp2 = null == closure_0;
    if (!tmp2) {
      tmp2 = !isNlpSearchEnabled;
    }
    let result = !tmp2;
    if (!tmp2) {
      result = SuggestedSearchStore.isLoadingSuggestedSearches(closure_0);
    }
    return result;
  }, items3);
  const effect = isNlpSearchEnabled.useEffect(() => {
    let tmp = closure_2;
    if (closure_2) {
      tmp = null != smartSearchQuery;
    }
    if (tmp) {
      tmp = 0 !== suggestedSearches.length;
    }
    if (tmp) {
      const obj2 = { smartSearchQuery, suggestedSearches, suggestionSource: source };
      const result = SmartSearchAnalyticsManagerDefault.trackSuggestedSearchesShownDeduped(obj2, SearchSessionAnalyticsManagerDefault);
    }
  }, items4);
  return { suggestedSearches, isLoadingSuggestedSearches };
});