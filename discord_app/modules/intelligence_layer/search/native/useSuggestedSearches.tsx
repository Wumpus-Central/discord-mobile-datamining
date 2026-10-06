// discord_app/modules/intelligence_layer/search/native/useSuggestedSearches.tsx
import SuggestedSearchStore2 from "../SuggestedSearchStore.tsx";
import SmartSearchConstants from "../SmartSearchConstants.tsx";
import SearchSessionAnalyticsManagerDefault from "../../../search/managers/native/SearchSessionAnalyticsManager.tsx";
import SmartSearchAnalyticsManagerDefault from "../SmartSearchAnalyticsManager.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
const SuggestedSearchStore = SuggestedSearchStore2;
let dependencyMap, guildId, suggestedSearches;

const EMPTY_SUGGESTED_SEARCHES = SuggestedSearchStore2.EMPTY_SUGGESTED_SEARCHES;
let closure_6 = SmartSearchConstants.SUGGESTED_SEARCHES_WINDOW_SIZE;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId, source) => {
      let closure_2;
      let first;
      let stateFromStoresArray;
      const _require = guildId;
      let tmp = _require;
      let tmp2 = dependencyMap;
      let obj = require("react");
      const cResult = obj.c(19);
      source = source.source;
      const trackShown = source.trackShown;
      dependencyMap = tmp4;
      guildId = undefined;
      const useIsNlpSearchEnabled = tmp(12020).useIsNlpSearchEnabled;
      tmp(12020);
      if (guildId != null) {
        guildId = guildId.guildId;
      }
      const isNlpSearchEnabled = useIsNlpSearchEnabled(guildId, source);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [stateFromStoresArray];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === isNlpSearchEnabled) {
        let tmp10;
        let tmp11;
        let tmp13;
        if (cResult[2] === guildId) {
          tmp10 = cResult[3];
          tmp11 = cResult[4];
        }
        const tmpResult3 = tmp(504);
        stateFromStoresArray = tmpResult3.useStateFromStoresArray(first, tmp10, tmp11);
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [stateFromStoresArray];
          cResult[5] = items1;
          tmp13 = items1;
        } else {
          tmp13 = cResult[5];
        }
        if (cResult[6] === isNlpSearchEnabled) {
          let tmp15;
          let tmp16;
          if (cResult[7] === guildId) {
            tmp15 = cResult[8];
            tmp16 = cResult[9];
          }
          const tmpResult4 = tmp(504);
          const stateFromStores = tmpResult4.useStateFromStores(tmp13, tmp15, tmp16);
          if (cResult[10] === guildId) {
            if (cResult[11] === source) {
              if (cResult[12] === stateFromStoresArray) {
                let tmp18;
                let tmp19;
                if (cResult[13] === (undefined !== trackShown && trackShown)) {
                  tmp18 = cResult[14];
                  tmp19 = cResult[15];
                }
                const effect = isNlpSearchEnabled.useEffect(tmp18, tmp19);
                if (cResult[16] === stateFromStores) {
                  let tmp22;
                  if (cResult[17] === stateFromStoresArray) {
                    tmp22 = cResult[18];
                  }
                  return tmp22;
                }
                class F {
                  constructor() {
                    const tmp = closure_2 && null != smartSearchQuery && 0 !== stateFromStoresArray.length;
                    if (tmp) {
                      const obj2 = {
                        smartSearchQuery,
                        suggestedSearches: stateFromStoresArray,
                        suggestionSource: source,
                      };
                      const obj = SmartSearchAnalyticsManagerDefault;
                      const result = obj.trackSuggestedSearchesShownDeduped(obj2, SearchSessionAnalyticsManagerDefault);
                    }
                  }
                }
                tmp23[0] = stateFromStoresArray;
                tmp23[1] = stateFromStores;
                class I {
                  constructor() {
                    const tmp2 = null == smartSearchQuery || !isNlpSearchEnabled;
                    const result = !tmp2 && SuggestedSearchStore.isLoadingSuggestedSearches(smartSearchQuery);
                    return result;
                  }
                }
                cResult[17] = stateFromStoresArray;
                cResult[18] = tmp23;
                tmp22 = tmp23;
              }
            }
          }
          class F {
            constructor() {
              const tmp = closure_2 && null != smartSearchQuery && 0 !== stateFromStoresArray.length;
              if (tmp) {
                const obj2 = { smartSearchQuery, suggestedSearches: stateFromStoresArray, suggestionSource: source };
                const obj = SmartSearchAnalyticsManagerDefault;
                const result = obj.trackSuggestedSearchesShownDeduped(obj2, SearchSessionAnalyticsManagerDefault);
              }
            }
          }
          const items2 = [stateFromStoresArray, guildId, ,];
          class I {
            constructor() {
              const tmp2 = null == smartSearchQuery || !isNlpSearchEnabled;
              const result = !tmp2 && SuggestedSearchStore.isLoadingSuggestedSearches(smartSearchQuery);
              return result;
            }
          }
          items2[3] = undefined !== trackShown && trackShown;
          cResult[10] = guildId;
          cResult[11] = source;
          cResult[12] = stateFromStoresArray;
          cResult[13] = undefined !== trackShown && trackShown;
          cResult[14] = F;
          cResult[15] = items2;
          tmp19 = items2;
          tmp18 = F;
        }
        class I {
          constructor() {
            const tmp2 = null == smartSearchQuery || !isNlpSearchEnabled;
            const result = !tmp2 && SuggestedSearchStore.isLoadingSuggestedSearches(smartSearchQuery);
            return result;
          }
        }
        const items3 = [guildId, isNlpSearchEnabled];
        cResult[6] = isNlpSearchEnabled;
        cResult[7] = guildId;
        cResult[8] = I;
        cResult[9] = items3;
        tmp16 = items3;
        tmp15 = I;
      }
      const fn = function l() {
        if (null != smartSearchQuery) {
          let nextSuggestions;
          if (isNlpSearchEnabled) {
            nextSuggestions = SuggestedSearchStore.getNextSuggestions(tmp, closure_6);
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
      tmp11 = items4;
      tmp10 = fn;
    }
  : (guildId, source) => {
      let closure_2;
      const _require = guildId;
      source = source.source;
      const trackShown = source.trackShown;
      let tmp = undefined !== trackShown && trackShown;
      dependencyMap = tmp;
      let tmp2 = _require;
      guildId = undefined;
      const useIsNlpSearchEnabled = require("SmartSearchExperiments").useIsNlpSearchEnabled;
      require("SmartSearchExperiments");
      if (guildId != null) {
        guildId = guildId.guildId;
      }
      const isNlpSearchEnabled = useIsNlpSearchEnabled(guildId, source);
      const items = [suggestedSearches];
      const items1 = [guildId, isNlpSearchEnabled];
      const tmp2Result = tmp2(504);
      suggestedSearches = tmp2Result.useStateFromStoresArray(
        items,
        () => {
          if (null != smartSearchQuery) {
            let nextSuggestions;
            if (isNlpSearchEnabled) {
              nextSuggestions = SuggestedSearchStore.getNextSuggestions(tmp, closure_6);
            }
            return nextSuggestions;
          }
          nextSuggestions = EMPTY_SUGGESTED_SEARCHES;
        },
        items1,
      );
      const items2 = [suggestedSearches];
      const items3 = [guildId, isNlpSearchEnabled];
      const items4 = [suggestedSearches, guildId, source, tmp];
      const tmp2Result2 = tmp2(504);
      const isLoadingSuggestedSearches = tmp2Result2.useStateFromStores(
        items2,
        () => {
          const tmp2 = null == smartSearchQuery || !isNlpSearchEnabled;
          const result = !tmp2 && SuggestedSearchStore.isLoadingSuggestedSearches(smartSearchQuery);
          return result;
        },
        items3,
      );
      const effect = isNlpSearchEnabled.useEffect(() => {
        const tmp = closure_2 && null != smartSearchQuery && 0 !== suggestedSearches.length;
        if (tmp) {
          const obj2 = { smartSearchQuery, suggestedSearches, suggestionSource: source };
          const obj = SmartSearchAnalyticsManagerDefault;
          const result = obj.trackSuggestedSearchesShownDeduped(obj2, SearchSessionAnalyticsManagerDefault);
        }
      }, items4);
      return { suggestedSearches, isLoadingSuggestedSearches };
    };
let result = size.fileFinishedImporting("modules/intelligence_layer/search/native/useSuggestedSearches.tsx");

export const useSuggestedSearches = tmp2;
