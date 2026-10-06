// === Module 16912: useFileOrLinkImageDimensions ===

// Module 16912 (useFileOrLinkImageDimensions)
import react2 from "react" /* 576 */;
import react from "react" /* 19 */;
import SearchConstants from "SearchConstants" /* 7524 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
({ FILES_OR_LINKS_GAP_WIDTH: c3, FILES_OR_LINKS_NUM_COLUMNS: closure_4, FILE_OR_LINK_IMAGE_RATIO: hasOwnProperty, SEARCH_LIST_HORIZONTAL_PADDING: metroRequire } = SearchConstants);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const obj = react2;
  const cResult = obj.c(3);
  const diff = (arg0 - 2 * metroRequire - (React3 - 1) * _false) / React3 - 2;
  const result = diff * hasOwnProperty;
  if (cResult[0] === result) {
    let tmp4;
    if (cResult[1] === diff) {
      tmp4 = cResult[2];
    }
    return tmp4;
  }
  size = { width: diff, height: result };
  cResult[0] = result;
  cResult[1] = diff;
  cResult[2] = size;
  tmp4 = size;
}) : ((arg0) => {
  const diff = (arg0 - 2 * metroRequire - (React3 - 1) * _false) / React3 - 2;
  const result = diff * hasOwnProperty;
  const items = [result, diff];
  return react.useMemo(() => {
    size = { width: diff, height: result };
    return size;
  }, items);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/search/native/hooks/useFileOrLinkImageDimensions.tsx");

export const useFileOrLinkImageDimensions = tmp3;