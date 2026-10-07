// === Module 10391: useMediaKeyboardItemsPerRow ===

// Module 10391 (useMediaKeyboardItemsPerRow)
import noop from "module_19" /* 19 */;

const require = fn;
let c4 = 17;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_keyboard/native/useMediaKeyboardItemsPerRow.tsx");

export const useMediaKeyboardItemsPerRow = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = num(576).c(6);
  const tmp4 = ref(4746)();
  num = 8;
  if (num(4746).WindowSizeClassifier.XLARGE !== tmp4) {
    num = 6;
    if (tmp(4746).WindowSizeClassifier.LARGE !== tmp4) {
      num = 4;
      if (tmp(4746).WindowSizeClassifier.NORMAL !== tmp4) {
        num = 3;
        if (tmp(4746).WindowSizeClassifier.SMALL !== tmp4) {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          const error = new Error("Unknown window size classifier: " + tmp4);
          throw error;
        }
      }
    }
  }
  const result = num * c4;
  ref = noop.useRef(result);
  if (cResult[0] !== num) {
    const fn = function n() {
      ref.current = num * c4;
    };
    const items = [num];
    cResult[0] = num;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp13 = items;
    let tmp12 = fn;
  } else {
    tmp12 = cResult[1];
    tmp13 = cResult[2];
  }
  const effect = noop.useEffect(tmp12, tmp13);
  if (cResult[3] === num) {
    if (cResult[4] === result) {
      let tmp15 = cResult[5];
    }
    return tmp15;
  }
  const obj3 = { itemsPerRow: num, itemsPageSize: result, itemsPageSizeRef: ref };
  cResult[3] = num;
  cResult[4] = result;
  cResult[5] = obj3;
  tmp15 = obj3;
  const obj = num(576);
}) : (() => {
  const tmp2 = itemsPageSizeRef(4746)();
  let itemsPerRow = 8;
  if (itemsPerRow(4746).WindowSizeClassifier.XLARGE !== tmp2) {
    itemsPerRow = 6;
    if (tmp3(4746).WindowSizeClassifier.LARGE !== tmp2) {
      itemsPerRow = 4;
      if (tmp3(4746).WindowSizeClassifier.NORMAL !== tmp2) {
        itemsPerRow = 3;
        if (tmp3(4746).WindowSizeClassifier.SMALL !== tmp2) {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          const error = new Error("Unknown window size classifier: " + tmp2);
          throw error;
        }
      }
    }
  }
  const itemsPageSize = itemsPerRow * c4;
  itemsPageSizeRef = noop.useRef(itemsPageSize);
  const items = [itemsPerRow];
  const effect = noop.useEffect(() => {
    itemsPageSizeRef.current = itemsPerRow * c4;
  }, items);
  return { itemsPerRow, itemsPageSize, itemsPageSizeRef };
});