// === Module 18769: useSuggestedSearches ===

// Module 18769 (useSuggestedSearches)
import SearchSessionAnalyticsManagerDefault from "SearchSessionAnalyticsManager" /* 13139 */;
import SmartSearchAnalyticsManagerDefault from "SmartSearchAnalyticsManager" /* 13141 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/intelligence_layer/search/native/useSuggestedSearches.tsx");

export function useSuggestedSearches(smartSearchQuery, source) {
  _require = smartSearchQuery;
  source = source.source;
  const trackShown = source.trackShown;
  dependencyMap = tmp;
  const isLoadingSuggestedSearches = require("search/useSuggestedSearches").useSuggestedSearches(smartSearchQuery, { source });
  const suggestedSearches = isLoadingSuggestedSearches.suggestedSearches;
  items = [suggestedSearches, smartSearchQuery, source, undefined !== trackShown && trackShown];
  const effect = suggestedSearches.useEffect(() => {
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
  }, items);
  return { suggestedSearches, isLoadingSuggestedSearches: isLoadingSuggestedSearches.isLoadingSuggestedSearches };
}