// === Module 15998: useSearchMediaSize ===

// Module 15998 (useSearchMediaSize)
import set from "set" /* 2 */;
import MessageEmbedTypes from "MessageEmbedTypes" /* 8554 */;

({ SEARCH_LIST_HORIZONTAL_PADDING: c0, MEDIA_NUM_COLUMNS: closure_1, MEDIA_ITEM_GAP_WIDTH: obj1 } = MessageEmbedTypes);
const result = set.fileFinishedImporting("modules/search/native/hooks/useSearchMediaSize.tsx");

export default function useSearchMediaSize(arg0) {
  return Math.floor((arg0 - 2 * closure_0 - closure_2 * (closure_1 - 1)) / closure_1);
};