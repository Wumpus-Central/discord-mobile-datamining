// _runtime/05522_BottomSheetDraggableScrollable.js
import LegacyBaseButton from "05334_LegacyBaseButton.js";
import noop from "metro/00019__.js";

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
