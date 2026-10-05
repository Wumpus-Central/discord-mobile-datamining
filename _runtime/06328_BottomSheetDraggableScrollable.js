// _runtime/06328_BottomSheetDraggableScrollable.js
import Fragment from "react/00021_Fragment.js";
import LegacyBaseButton from "06140_LegacyBaseButton.js";
import react from "00019_react.js";

const jsx = Fragment.jsx;

export const BottomSheetDraggableScrollable = function BottomSheetDraggableScrollable(arg0) {
  let children;
  let scrollableGesture;
  ({ scrollableGesture, children } = arg0);
  let tmp = children;
  if (scrollableGesture) {
    tmp = jsx(LegacyBaseButton.GestureDetector, { gesture: scrollableGesture, children });
  }
  return tmp;
};
