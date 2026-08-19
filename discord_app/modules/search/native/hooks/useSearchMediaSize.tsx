// discord_app/modules/search/native/hooks/useSearchMediaSize.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import MessageEmbedTypes from "../../SearchConstants.tsx";

({ SEARCH_LIST_HORIZONTAL_PADDING: c0, MEDIA_NUM_COLUMNS: closure_1, MEDIA_ITEM_GAP_WIDTH: obj1 } = MessageEmbedTypes);
const result = obj132.fileFinishedImporting("modules/search/native/hooks/useSearchMediaSize.tsx");

export default function useSearchMediaSize(arg0) {
  return Math.floor((arg0 - 2 * closure_0 - closure_2 * (closure_1 - 1)) / closure_1);
};