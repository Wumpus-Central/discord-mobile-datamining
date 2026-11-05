// === Module 19059: SmartSearchContent ===

// Module 19059 (SmartSearchContent)
import SmartSearchTypes from "SmartSearchTypes" /* 14122 */;
import SuggestedSearchListDefault from "SuggestedSearchList" /* 19005 */;
import SmartSearchSkeletonDefault from "SmartSearchSkeleton" /* 19060 */;
import SmartSearchResults from "SmartSearchResults" /* 19061 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/components/SmartSearchContent.tsx");

export function SmartSearchContent(arg0) {
  ({ smartSearchQuery, entry } = arg0);
  const status = entry.status;
  ({ hasKeywordResults, isCollapsed } = arg0);
  if (SmartSearchTypes.SmartSearchStatus.NOT_QUALIFIED === status) {
    return null;
  } else if (SmartSearchTypes.SmartSearchStatus.LOADING === status) {
    const obj2 = { isCollapsed };
    return jsx(SmartSearchSkeletonDefault, { isCollapsed });
  } else if (SmartSearchTypes.SmartSearchStatus.LOADED === status) {
    const obj3 = { smartSearchQuery, hasKeywordResults, entry };
    return jsx(SmartSearchResults.SmartSearchResults, { smartSearchQuery, hasKeywordResults, entry });
  } else {
    if (SmartSearchTypes.SmartSearchStatus.ERROR !== status) {
      const EMPTY = SmartSearchTypes.SmartSearchStatus.EMPTY;
    }
    const obj = { smartSearchQuery, source: "smart_search_row" };
    return jsx(SuggestedSearchListDefault, { smartSearchQuery, source: "smart_search_row" });
  }
}