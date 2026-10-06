// discord_app/modules/intelligence_layer/search/native/components/SmartSearchContent.tsx
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../../_runtime/00576_react.js";
import SmartSearchTypes from "../../SmartSearchTypes.tsx";
import SuggestedSearchListDefault from "SuggestedSearchList.tsx";
import SmartSearchSkeletonDefault from "SmartSearchSkeleton.tsx";
import SmartSearchResults from "SmartSearchResults.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
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
    }
  : (arg0) => {
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
    };
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/components/SmartSearchContent.tsx");

export const SmartSearchContent = tmp3;
