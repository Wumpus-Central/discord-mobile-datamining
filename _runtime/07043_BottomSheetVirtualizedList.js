// _runtime/07043_BottomSheetVirtualizedList.js
import cancelAnimation from "01637_cancelAnimation.js";

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).VirtualizedList);
const module_7033 = fn(7033);
const memoResult = fn(19).memo(
  module_7033.createBottomSheetScrollableComponent(fn(6821).SCROLLABLE_TYPE.VIRTUALIZEDLIST, animatedComponent),
);
memoResult.displayName = "BottomSheetVirtualizedList";

export default memoResult;
