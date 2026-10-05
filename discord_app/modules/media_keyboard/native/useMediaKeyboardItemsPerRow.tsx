// === Module 10378: useMediaKeyboardItemsPerRow ===

// Module 10378 (useMediaKeyboardItemsPerRow)
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c4 = 17;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function() {
  let num;
  let ref;
  let tmp10;
  let tmp11;
  const obj = num(576);
  const cResult = obj.c(6);
  const tmp4 = ref(4740)();
  num = 8;
  if (num(4740).WindowSizeClassifier.XLARGE !== tmp4) {
    num = 6;
    if (num(4740).WindowSizeClassifier.LARGE !== tmp4) {
      num = 4;
      if (num(4740).WindowSizeClassifier.NORMAL !== tmp4) {
        num = 3;
        if (num(4740).WindowSizeClassifier.SMALL !== tmp4) {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          const self = this;
          const self2 = this;
          const error = new Error("Unknown window size classifier: " + tmp4);
          throw error;
        }
      }
    }
  }
  const result = num * c4;
  ref = react.useRef(result);
  if (cResult[0] !== num) {
    const fn = function n() {
      ref.current = num * c4;
    };
    const items = [num];
    cResult[0] = num;
    cResult[1] = fn;
    cResult[2] = items;
    tmp11 = items;
    tmp10 = fn;
  } else {
    tmp10 = cResult[1];
    tmp11 = cResult[2];
  }
  const effect = react.useEffect(tmp10, tmp11);
  if (cResult[3] === num) {
    let tmp13;
    if (cResult[4] === result) {
      tmp13 = cResult[5];
    }
    return tmp13;
  }
  const obj3 = { itemsPerRow: num, itemsPageSize: result, itemsPageSizeRef: ref };
  cResult[3] = num;
  cResult[4] = result;
  cResult[5] = obj3;
  tmp13 = obj3;
}) : (function() {
  let itemsPageSizeRef;
  const tmp2 = itemsPageSizeRef(4740)();
  let itemsPerRow = 8;
  if (itemsPerRow(4740).WindowSizeClassifier.XLARGE !== tmp2) {
    itemsPerRow = 6;
    if (itemsPerRow(4740).WindowSizeClassifier.LARGE !== tmp2) {
      itemsPerRow = 4;
      if (itemsPerRow(4740).WindowSizeClassifier.NORMAL !== tmp2) {
        itemsPerRow = 3;
        if (itemsPerRow(4740).WindowSizeClassifier.SMALL !== tmp2) {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          const self = this;
          const self2 = this;
          const error = new Error("Unknown window size classifier: " + tmp2);
          throw error;
        }
      }
    }
  }
  const itemsPageSize = itemsPerRow * c4;
  itemsPageSizeRef = react.useRef(itemsPageSize);
  const items = [itemsPerRow];
  const effect = react.useEffect(() => {
    itemsPageSizeRef.current = itemsPerRow * c4;
  }, items);
  return { itemsPerRow, itemsPageSize, itemsPageSizeRef };
});
let result = size.fileFinishedImporting("modules/media_keyboard/native/useMediaKeyboardItemsPerRow.tsx");

export const useMediaKeyboardItemsPerRow = tmp2;