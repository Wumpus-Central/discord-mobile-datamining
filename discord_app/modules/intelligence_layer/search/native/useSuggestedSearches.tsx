// === Module 18693: useSuggestedSearches ===

// Module 18693 (useSuggestedSearches)
import SearchSessionAnalyticsManagerDefault from "SearchSessionAnalyticsManager" /* 13893 */;
import SmartSearchAnalyticsManagerDefault from "SmartSearchAnalyticsManager" /* 13895 */;
import noop from "module_19" /* 19 */;
import SuggestedSearchStore from "SuggestedSearchStore" /* 13872 */;

const require = globalThis.__r;

const require = fn;
const EMPTY_SUGGESTED_SEARCHES = fn(13872).EMPTY_SUGGESTED_SEARCHES;
let closure_6 = fn(13873).SUGGESTED_SEARCHES_WINDOW_SIZE;
const size = fn(2);
let result = size.fileFinishedImporting("modules/intelligence_layer/search/native/useSuggestedSearches.tsx");

export function useSuggestedSearches(memo1, source) {
  _require = memo1;
  source = source.source;
  const trackShown = source.trackShown;
  dependencyMap = tmp;
  let guildId;
  if (memo1 != null) {
    guildId = memo1.guildId;
  }
  const isNlpSearchEnabled = require("SmartSearchExperiments").useIsNlpSearchEnabled(guildId, source);
  let obj = require("SmartSearchExperiments");
  const items = [suggestedSearches];
  const items1 = [memo1, isNlpSearchEnabled];
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
  const items3 = [memo1, isNlpSearchEnabled];
  const items4 = [suggestedSearches, memo1, source, undefined !== trackShown && trackShown];
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
}