// _runtime/05497_BottomSheetDraggableScrollable.js
import "noop";
import { jsx } from "jsxProd";
import { Directions } from "05368_Directions.js";

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
    tmp = jsx(Directions.GestureDetector, { gesture: null, children: null });
  }
  return tmp;
};