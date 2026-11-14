// === Module 5569: BottomSheetSnapPoints ===

// Module 5569 (BottomSheetSnapPoints)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("design/components/Sheet/native/BottomSheetSnapPoints.tsx");

export function resolveDroppedStartHeight(droppedStartHeight) {
  ({ contentHeight, startHeight } = droppedStartHeight);
  if (droppedStartHeight.droppedStartHeight === startHeight) {
    let tmp2 = startHeight;
  } else {
    tmp2 = null;
    if (null != contentHeight) {
      tmp2 = null;
    }
  }
  return tmp2;
}
export function getContentSizeSnapPoints(startHeight) {
  startHeight = startHeight.startHeight;
  if (!startHeight.forceFullHeight) {
    if (startHeight.droppedStartHeight !== startHeight) {
      items = [startHeight];
    }
    return items;
  }
  items = [];
}
export function getRotationResyncIndex(arg0) {
  ({ settledIndex, snapPointCount } = arg0);
  if (settledIndex >= 0) {
    if (snapPointCount > 0) {
      const diff = snapPointCount - 1;
      let bound = diff;
      if (!tmp) {
        const _Math = Math;
        bound = Math.min(settledIndex, diff);
      }
      return bound;
    }
  }
  return null;
}