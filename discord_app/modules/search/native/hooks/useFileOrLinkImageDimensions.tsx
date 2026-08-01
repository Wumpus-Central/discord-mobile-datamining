// === Module 15558: useFileOrLinkImageDimensions ===

// Module 15558 (useFileOrLinkImageDimensions)
import noop from "noop";
import MessageEmbedTypes from "MessageEmbedTypes";

let c3;
let c4;
let closure_1;
let obj1;
({ FILES_OR_LINKS_GAP_WIDTH: closure_1, FILES_OR_LINKS_NUM_COLUMNS: obj1, FILE_OR_LINK_IMAGE_RATIO: c3, SEARCH_LIST_HORIZONTAL_PADDING: c4 } = MessageEmbedTypes);
let result = require("set").fileFinishedImporting("modules/search/native/hooks/useFileOrLinkImageDimensions.tsx");

export const useFileOrLinkImageDimensions = function useFileOrLinkImageDimensions(width) {
  const diff = (width - 2 * closure_4 - (closure_2 - 1) * result) / closure_2 - 2;
  const React = diff;
  result = diff * closure_3;
  const items = [result, diff];
  return React.useMemo(() => ({ width: noop, height: closure_1 }), items);
};