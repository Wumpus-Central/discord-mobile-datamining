// === Module 8395: useCollectibleListLayout ===

// Module 8395 (useCollectibleListLayout)
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;

({ useCallback: closure_1, useState: obj1 } = noop);
const result = require("obj132").fileFinishedImporting("modules/collectibles/native/useCollectibleListLayout.tsx");

export default function useCollectibleListLayout() {
  const tmp = callback(callback3(0), 2);
  callback = tmp[1];
  return {
    size: tmp[0],
    onLayout: callback2((nativeEvent) => {
      callback((nativeEvent.nativeEvent.layout.width - 64) / 3);
    }, [])
  };
};
export const GUTTER_SIZE = 16;
export const ROW_SIZE = 3;
export const COLLECTIBLE_ROW_HEIGHT = 114;