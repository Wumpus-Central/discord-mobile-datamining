// === Module 16142: useSearchMediaSize ===

// Module 16142 (useSearchMediaSize)
import set from "set" /* 2 */;
import MessageEmbedTypes from "MessageEmbedTypes" /* 7555 */;

({ SEARCH_LIST_HORIZONTAL_PADDING: c0, MEDIA_NUM_COLUMNS: closure_1, MEDIA_ITEM_GAP_WIDTH: obj1 } = MessageEmbedTypes);
const result = set.fileFinishedImporting("modules/search/native/hooks/useSearchMediaSize.tsx");

export default function useSearchMediaSize(arg0) {
  return Math.floor((arg0 - 2 * closure_0 - closure_2 * (closure_1 - 1)) / closure_1);
};