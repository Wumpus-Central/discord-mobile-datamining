// === Module 16879: SmartSearchContent ===

// Module 16879 (SmartSearchContent)
import c from "c" /* 576 */;
import SmartSearchTypes from "SmartSearchTypes" /* 11985 */;
import SuggestedSearchListDefault from "SuggestedSearchList" /* 16825 */;
import SmartSearchSkeletonDefault from "SmartSearchSkeleton" /* 16880 */;
import SmartSearchResults from "SmartSearchResults" /* 16881 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/components/SmartSearchContent.tsx");

export const SmartSearchContent = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(8);
  ({ smartSearchQuery, hasKeywordResults, entry, isCollapsed } = arg0);
  const status = entry.status;
  if (SmartSearchTypes.SmartSearchStatus.NOT_QUALIFIED === status) {
    return null;
  } else if (SmartSearchTypes.SmartSearchStatus.LOADING === status) {
    if (cResult[0] !== isCollapsed) {
      const obj2 = { isCollapsed };
      const tmp14 = jsx(SmartSearchSkeletonDefault, { isCollapsed });
      cResult[0] = isCollapsed;
      cResult[1] = tmp14;
      let tmp11 = tmp14;
    } else {
      tmp11 = cResult[1];
    }
    return tmp11;
  } else if (SmartSearchTypes.SmartSearchStatus.LOADED === status) {
    if (cResult[2] === entry) {
      if (cResult[3] === hasKeywordResults) {
        if (cResult[4] === smartSearchQuery) {
          let tmp8 = cResult[5];
        }
        return tmp8;
      }
    }
    const obj3 = { smartSearchQuery, hasKeywordResults, entry };
    const tmp10 = jsx(SmartSearchResults.SmartSearchResults, { smartSearchQuery, hasKeywordResults, entry });
    cResult[2] = entry;
    cResult[3] = hasKeywordResults;
    cResult[4] = smartSearchQuery;
    cResult[5] = tmp10;
    tmp8 = tmp10;
  } else {
    if (SmartSearchTypes.SmartSearchStatus.ERROR !== status) {
      const EMPTY = SmartSearchTypes.SmartSearchStatus.EMPTY;
    }
    if (cResult[6] !== smartSearchQuery) {
      const obj4 = { smartSearchQuery, source: "smart_search_row" };
      const tmp7 = jsx(SuggestedSearchListDefault, { smartSearchQuery, source: "smart_search_row" });
      cResult[6] = smartSearchQuery;
      cResult[7] = tmp7;
      let tmp4 = tmp7;
    } else {
      tmp4 = cResult[7];
    }
    return tmp4;
  }
}) : ((arg0) => {
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
});