// === Module 16051: useFileOrLinkImageDimensions ===

// Module 16051 (useFileOrLinkImageDimensions)
import closure_0 from "noop" /* 19 */;
import MessageEmbedTypes from "MessageEmbedTypes" /* 8554 */;

({ FILES_OR_LINKS_GAP_WIDTH: closure_1, FILES_OR_LINKS_NUM_COLUMNS: obj1, FILE_OR_LINK_IMAGE_RATIO: c3, SEARCH_LIST_HORIZONTAL_PADDING: c4 } = MessageEmbedTypes);
let result = require("set").fileFinishedImporting("modules/search/native/hooks/useFileOrLinkImageDimensions.tsx");

export const useFileOrLinkImageDimensions = function useFileOrLinkImageDimensions(width) {
  const diff = (width - 2 * closure_4 - (closure_2 - 1) * result) / closure_2 - 2;
  const React = diff;
  result = diff * closure_3;
  const items = [result, diff];
  return React.useMemo(() => ({ width: closure_0, height: closure_1 }), items);
};