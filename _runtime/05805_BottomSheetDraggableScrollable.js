// _runtime/05805_BottomSheetDraggableScrollable.js
import noopDefault from "00019_noop.js";
import LegacyBaseButton from "05617_LegacyBaseButton.js";
import { jsx } from "react/00021_jsxProd.js";

require = arg1;
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