// discord_app/modules/intelligence_layer/search/native/useSuggestedSearches.tsx
import SmartSearchConstants from "../SmartSearchConstants.tsx";
import SuggestedSearchStore2 from "../SuggestedSearchStore.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
const SuggestedSearchStore = SuggestedSearchStore2;
let _require, guildId;

const EMPTY_SUGGESTED_SEARCHES = SuggestedSearchStore2.EMPTY_SUGGESTED_SEARCHES;
let closure_4 = SmartSearchConstants.SUGGESTED_SEARCHES_WINDOW_SIZE;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId, arg1) => {
      let first;
      let isNlpSearchEnabled;
      _require = guildId;
      const obj = require("react");
      const cResult = obj.c(13);
      guildId = undefined;
      const useIsNlpSearchEnabled = require("SmartSearchExperiments").useIsNlpSearchEnabled;
      require("SmartSearchExperiments");
      if (guildId != null) {
        guildId = guildId.guildId;
      }
      isNlpSearchEnabled = useIsNlpSearchEnabled(guildId, arg1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [SuggestedSearchStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === isNlpSearchEnabled) {
        let tmp9;
        let tmp10;
        let tmp12;
        if (cResult[2] === guildId) {
          tmp9 = cResult[3];
          tmp10 = cResult[4];
        }
        const tmpResult = require("get initialized");
        const stateFromStoresArray = tmpResult.useStateFromStoresArray(first, tmp9, tmp10);
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [SuggestedSearchStore];
          cResult[5] = items1;
          tmp12 = items1;
        } else {
          tmp12 = cResult[5];
        }
        if (cResult[6] === isNlpSearchEnabled) {
          let tmp14;
          let tmp15;
          if (cResult[7] === guildId) {
            tmp14 = cResult[8];
            tmp15 = cResult[9];
          }
          const tmpResult2 = require("get initialized");
          const stateFromStores = tmpResult2.useStateFromStores(tmp12, tmp14, tmp15);
          if (cResult[10] === stateFromStores) {
            let tmp17;
            if (cResult[11] === stateFromStoresArray) {
              tmp17 = cResult[12];
            }
            return tmp17;
          }
          const obj2 = { suggestedSearches: stateFromStoresArray, isLoadingSuggestedSearches: stateFromStores };
          class E {
            constructor() {
              if (null != guildId) {
                if (isNlpSearchEnabled) {
                  return SuggestedSearchStore.isLoadingSuggestedSearches(guildId.guildId, guildId.channelIds);
                }
              }
              return false;
            }
          }
          cResult[10] = stateFromStores;
          cResult[11] = stateFromStoresArray;
          cResult[12] = obj2;
          tmp17 = obj2;
        }
        class E {
          constructor() {
            if (null != guildId) {
              if (isNlpSearchEnabled) {
                return SuggestedSearchStore.isLoadingSuggestedSearches(guildId.guildId, guildId.channelIds);
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
        tmp15 = items2;
        tmp14 = E;
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
      tmp10 = items3;
      tmp9 = fn;
    }
  : (guildId, arg1) => {
      let isNlpSearchEnabled;
      let items;
      let items1;
      let items2;
      let items3;
      let tmpResult;
      let tmpResult2;
      _require = guildId;
      guildId = undefined;
      const useIsNlpSearchEnabled = require("SmartSearchExperiments").useIsNlpSearchEnabled;
      require("SmartSearchExperiments");
      if (guildId != null) {
        guildId = guildId.guildId;
      }
      isNlpSearchEnabled = useIsNlpSearchEnabled(guildId, arg1);
      const obj = {
        suggestedSearches: tmpResult.useStateFromStoresArray(
          items,
          () => {
            if (null != guildId) {
              if (isNlpSearchEnabled) {
                return SuggestedSearchStore.getNextSuggestions(guildId.guildId, guildId.channelIds, closure_4);
              }
            }
            return EMPTY_SUGGESTED_SEARCHES;
          },
          items1,
        ),
        isLoadingSuggestedSearches: tmpResult2.useStateFromStores(
          items2,
          () => {
            if (null != guildId) {
              if (isNlpSearchEnabled) {
                return SuggestedSearchStore.isLoadingSuggestedSearches(guildId.guildId, guildId.channelIds);
              }
            }
            return false;
          },
          items3,
        ),
      };
      items = [SuggestedSearchStore];
      items1 = [guildId, isNlpSearchEnabled];
      items2 = [SuggestedSearchStore];
      items3 = [guildId, isNlpSearchEnabled];
      tmpResult = require("get initialized");
      tmpResult2 = require("get initialized");
      return obj;
    };
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/useSuggestedSearches.tsx");

export const useSuggestedSearches = tmp2;
