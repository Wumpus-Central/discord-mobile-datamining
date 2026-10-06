// === Module 16879: SmartSearchContent ===

// Module 16879 (SmartSearchContent)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import SmartSearchTypes from "SmartSearchTypes" /* 11985 */;
import SuggestedSearchListDefault from "SuggestedSearchList" /* 16825 */;
import SmartSearchSkeletonDefault from "SmartSearchSkeleton" /* 16880 */;
import SmartSearchResults from "SmartSearchResults" /* 16881 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let entry;
  let hasKeywordResults;
  let isCollapsed;
  let smartSearchQuery;
  const obj = react2;
  const cResult = obj.c(8);
  ({ smartSearchQuery, hasKeywordResults, entry, isCollapsed } = arg0);
  const status = entry.status;
  if (SmartSearchTypes.SmartSearchStatus.NOT_QUALIFIED === status) {
    return null;
  } else if (SmartSearchTypes.SmartSearchStatus.LOADING === status) {
    let tmp11;
    if (cResult[0] !== isCollapsed) {
      const tmp14 = jsx(SmartSearchSkeletonDefault, { isCollapsed });
      cResult[0] = isCollapsed;
      cResult[1] = tmp14;
      tmp11 = tmp14;
    } else {
      tmp11 = cResult[1];
    }
    return tmp11;
  } else if (SmartSearchTypes.SmartSearchStatus.LOADED === status) {
    if (cResult[2] === entry) {
      if (cResult[3] === hasKeywordResults) {
        let tmp8;
        if (cResult[4] === smartSearchQuery) {
          tmp8 = cResult[5];
        }
        return tmp8;
      }
    }
    const tmp10 = jsx(SmartSearchResults.SmartSearchResults, { smartSearchQuery, hasKeywordResults, entry });
    cResult[2] = entry;
    cResult[3] = hasKeywordResults;
    cResult[4] = smartSearchQuery;
    cResult[5] = tmp10;
    tmp8 = tmp10;
  } else {
    let tmp4;
    if (SmartSearchTypes.SmartSearchStatus.ERROR !== status) {
      const EMPTY = SmartSearchTypes.SmartSearchStatus.EMPTY;
    }
    if (cResult[6] !== smartSearchQuery) {
      const tmp7 = jsx(SuggestedSearchListDefault, { smartSearchQuery, source: "smart_search_row" });
      cResult[6] = smartSearchQuery;
      cResult[7] = tmp7;
      tmp4 = tmp7;
    } else {
      tmp4 = cResult[7];
    }
    return tmp4;
  }
}) : ((arg0) => {
  let entry;
  let hasKeywordResults;
  let isCollapsed;
  let smartSearchQuery;
  ({ smartSearchQuery, entry } = arg0);
  const status = entry.status;
  ({ hasKeywordResults, isCollapsed } = arg0);
  if (SmartSearchTypes.SmartSearchStatus.NOT_QUALIFIED === status) {
    return null;
  } else if (SmartSearchTypes.SmartSearchStatus.LOADING === status) {
    return jsx(SmartSearchSkeletonDefault, { isCollapsed });
  } else if (SmartSearchTypes.SmartSearchStatus.LOADED === status) {
    return jsx(SmartSearchResults.SmartSearchResults, { smartSearchQuery, hasKeywordResults, entry });
  } else {
    if (SmartSearchTypes.SmartSearchStatus.ERROR !== status) {
      const EMPTY = SmartSearchTypes.SmartSearchStatus.EMPTY;
    }
    return jsx(SuggestedSearchListDefault, { smartSearchQuery, source: "smart_search_row" });
  }
});
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/components/SmartSearchContent.tsx");

export const SmartSearchContent = tmp3;