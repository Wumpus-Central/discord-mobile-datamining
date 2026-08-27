// === Module 10359: useMediaKeyboardItemsPerRow ===

// Module 10359 (useMediaKeyboardItemsPerRow)
import closure_3 from "noop" /* 19 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/media_keyboard/native/useMediaKeyboardItemsPerRow.tsx");

export const useMediaKeyboardItemsPerRow = function useMediaKeyboardItemsPerRow() {
  const tmp2 = itemsPageSizeRef(4303)();
  let itemsPerRow = 8;
  if (itemsPerRow(4303).WindowSizeClassifier.XLARGE !== tmp2) {
    itemsPerRow = 6;
    if (tmp3(4303).WindowSizeClassifier.LARGE !== tmp2) {
      itemsPerRow = 4;
      if (tmp3(4303).WindowSizeClassifier.NORMAL !== tmp2) {
        itemsPerRow = 3;
        if (tmp3(4303).WindowSizeClassifier.SMALL !== tmp2) {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          error = new Error("Unknown window size classifier: " + tmp2);
          throw error;
        }
      }
    }
  }
  const itemsPageSize = 17 * itemsPerRow;
  itemsPageSizeRef = React.useRef(itemsPageSize);
  const items = [itemsPerRow];
  const effect = React.useEffect(() => {
    itemsPageSizeRef.current = 17 * itemsPerRow;
  }, items);
  return { itemsPerRow, itemsPageSize, itemsPageSizeRef };
};