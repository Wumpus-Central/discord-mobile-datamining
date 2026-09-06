// discord_app/modules/search/native/hooks/useFileOrLinkImageDimensions.tsx
import noop from "../../../../../_runtime/metro/00019__.js";

const SearchConstants = fn(7878);
({
  FILES_OR_LINKS_GAP_WIDTH: closure_1,
  FILES_OR_LINKS_NUM_COLUMNS: c2,
  FILE_OR_LINK_IMAGE_RATIO: c3,
  SEARCH_LIST_HORIZONTAL_PADDING: closure_4,
} = SearchConstants);
let size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/hooks/useFileOrLinkImageDimensions.tsx");

export const useFileOrLinkImageDimensions = function useFileOrLinkImageDimensions(width) {
  const diff = (width - 2 * React4 - (React2 - 1) * framebus) / React2 - 2;
  noop = diff;
  const result = diff * React3;
  closure_1 = result;
  const items = [result, diff];
  return noop.useMemo(() => {
    const size = { width: diff, height: result };
    return size;
  }, items);
};
