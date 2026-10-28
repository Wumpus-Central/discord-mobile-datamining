// _runtime/05528_BottomSheetVirtualizedList.js
import cancelAnimation from "01655_cancelAnimation.js";

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).VirtualizedList);
const module_5518 = fn(5518);
const memoResult = fn(19).memo(
  module_5518.createBottomSheetScrollableComponent(fn(5306).SCROLLABLE_TYPE.VIRTUALIZEDLIST, animatedComponent),
);
memoResult.displayName = "BottomSheetVirtualizedList";

export default memoResult;
