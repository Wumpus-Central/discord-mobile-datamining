// === Module 16868: useFileOrLinkImageDimensions ===

// Module 16868 (useFileOrLinkImageDimensions)
import c from "c" /* 576 */;
import noop from "module_19" /* 19 */;

require = fn;
const SearchConstants = fn(7513);
({ FILES_OR_LINKS_GAP_WIDTH: c3, FILES_OR_LINKS_NUM_COLUMNS: closure_4, FILE_OR_LINK_IMAGE_RATIO: hasOwnProperty, SEARCH_LIST_HORIZONTAL_PADDING: metroRequire } = SearchConstants);
const ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/hooks/useFileOrLinkImageDimensions.tsx");

export const useFileOrLinkImageDimensions = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(3);
  const diff = (arg0 - 2 * timestampProducer - (React4 - 1) * React3) / React4 - 2;
  const result = diff * hasOwnProperty;
  if (cResult[0] === result) {
    if (cResult[1] === diff) {
      let tmp4 = cResult[2];
    }
    return tmp4;
  }
  const size = { width: diff, height: result };
  cResult[0] = result;
  cResult[1] = diff;
  cResult[2] = size;
  tmp4 = size;
}) : ((arg0) => {
  const diff = (arg0 - 2 * timestampProducer - (React4 - 1) * React3) / React4 - 2;
  require = diff;
  const result = diff * hasOwnProperty;
  dependencyMap = result;
  const items = [result, diff];
  return noop.useMemo(() => {
    const size = { width: diff, height: result };
    return size;
  }, items);
});