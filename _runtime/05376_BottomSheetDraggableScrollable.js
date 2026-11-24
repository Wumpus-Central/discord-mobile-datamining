// === Module 5376: BottomSheetDraggableScrollable ===

// Module 5376 (BottomSheetDraggableScrollable)
import LegacyBaseButton from "LegacyBaseButton" /* 5177 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export function BottomSheetDraggableScrollable(arg0) {
  ({ scrollableGesture, children } = arg0);
  let tmp = children;
  if (scrollableGesture) {
    const obj = { gesture: scrollableGesture, children };
    tmp = jsx(LegacyBaseButton.GestureDetector, { gesture: scrollableGesture, children });
  }
  return tmp;
}