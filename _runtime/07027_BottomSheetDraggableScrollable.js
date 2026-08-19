// === Module 7027: BottomSheetDraggableScrollable ===

// Module 7027 (BottomSheetDraggableScrollable)
import noopDefault from "noop" /* 19 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6377 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;
noopDefault;

export const BottomSheetDraggableScrollable = function BottomSheetDraggableScrollable(arg0) {
  ({ scrollableGesture, children } = arg0);
  let tmp = children;
  if (scrollableGesture) {
    const obj = { gesture: null, children: null };
    obj[0] = scrollableGesture;
    obj[1] = children;
    tmp = jsx(LegacyBaseButton.GestureDetector, { gesture: null, children: null });
  }
  return tmp;
};