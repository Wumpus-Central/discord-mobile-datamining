// === Module 18881: search/useSuggestedSearches ===

// Module 18881 (search/useSuggestedSearches)
import SuggestedSearchStore from "SuggestedSearchStore" /* 13235 */;

const require = globalThis.__r;

const require = fn;
const EMPTY_SUGGESTED_SEARCHES = fn(13235).EMPTY_SUGGESTED_SEARCHES;
let closure_4 = fn(13236).SUGGESTED_SEARCHES_WINDOW_SIZE;
const size = fn(2);
let result = size.fileFinishedImporting("modules/intelligence_layer/search/useSuggestedSearches.tsx");

export function useSuggestedSearches(guildId, source) {
  _require = guildId;
  let isNlpSearchEnabled;
  guildId = undefined;
  if (guildId != null) {
    guildId = guildId.guildId;
  }
  isNlpSearchEnabled = require("SmartSearchExperiments").useIsNlpSearchEnabled(guildId, source.source);
  const obj2 = { suggestedSearches: null, isLoadingSuggestedSearches: null };
  const obj = require("SmartSearchExperiments");
  items = [SuggestedSearchStore];
  const items1 = [guildId, isNlpSearchEnabled];
  obj2.suggestedSearches = require("initialize").useStateFromStoresArray(items, () => {
    if (null != closure_0) {
      if (isNlpSearchEnabled) {
        let nextSuggestions = SuggestedSearchStore.getNextSuggestions(tmp, closure_4);
      }
      return nextSuggestions;
    }
    nextSuggestions = EMPTY_SUGGESTED_SEARCHES;
  }, items1);
  const tmpResult = require("initialize");
  const items2 = [SuggestedSearchStore];
  const items3 = [guildId, isNlpSearchEnabled];
  obj2.isLoadingSuggestedSearches = require("initialize").useStateFromStores(items2, () => {
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
  return obj2;
}