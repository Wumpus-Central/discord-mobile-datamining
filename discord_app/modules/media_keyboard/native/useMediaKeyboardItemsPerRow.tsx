// discord_app/modules/media_keyboard/native/useMediaKeyboardItemsPerRow.tsx
import noop from "noop";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/media_keyboard/native/useMediaKeyboardItemsPerRow.tsx");

export const useMediaKeyboardItemsPerRow = function useMediaKeyboardItemsPerRow() {
  const tmp2 = itemsPageSizeRef(4156)();
  let itemsPerRow = 8;
  if (itemsPerRow(4156).WindowSizeClassifier.XLARGE !== tmp2) {
    itemsPerRow = 6;
    if (tmp3(4156).WindowSizeClassifier.LARGE !== tmp2) {
      itemsPerRow = 4;
      if (tmp3(4156).WindowSizeClassifier.NORMAL !== tmp2) {
        itemsPerRow = 3;
        if (tmp3(4156).WindowSizeClassifier.SMALL !== tmp2) {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          const error = new Error("Unknown window size classifier: " + tmp2);
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