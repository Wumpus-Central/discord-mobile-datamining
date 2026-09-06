// discord_app/modules/media_keyboard/native/useMediaKeyboardItemsPerRow.tsx
import useWindowSizeClassifier from "../../screen/native/useWindowSizeClassifier.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const useWindowSizeClassifierDefault = useWindowSizeClassifier;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_keyboard/native/useMediaKeyboardItemsPerRow.tsx");

export const useMediaKeyboardItemsPerRow = function useMediaKeyboardItemsPerRow() {
  const tmp2 = useWindowSizeClassifierDefault();
  let itemsPerRow = 8;
  if (useWindowSizeClassifier.WindowSizeClassifier.XLARGE !== tmp2) {
    itemsPerRow = 6;
    if (useWindowSizeClassifier.WindowSizeClassifier.LARGE !== tmp2) {
      itemsPerRow = 4;
      if (useWindowSizeClassifier.WindowSizeClassifier.NORMAL !== tmp2) {
        itemsPerRow = 3;
        if (useWindowSizeClassifier.WindowSizeClassifier.SMALL !== tmp2) {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          const error = new Error("Unknown window size classifier: " + tmp2);
          throw error;
        }
      }
    }
  }
  const itemsPageSize = 17 * itemsPerRow;
  const itemsPageSizeRef = noop.useRef(itemsPageSize);
  const items = [itemsPerRow];
  const effect = noop.useEffect(() => {
    itemsPageSizeRef.current = 17 * itemsPerRow;
  }, items);
  return { itemsPerRow, itemsPageSize, itemsPageSizeRef };
};
