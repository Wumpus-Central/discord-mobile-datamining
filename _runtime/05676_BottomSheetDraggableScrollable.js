// _runtime/05676_BottomSheetDraggableScrollable.js
import "noop";
import { jsx } from "jsxProd";
import { LegacyBaseButton } from "05488_LegacyBaseButton.js";

const require = arg1;

export const BottomSheetDraggableScrollable = function BottomSheetDraggableScrollable(arg0) {
  let children;
  let scrollableGesture;
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