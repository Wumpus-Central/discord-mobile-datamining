// _runtime/06335_BottomSheetVirtualizedList.js
import cancelAnimation from "01643_cancelAnimation.js";

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).VirtualizedList);
const module_6325 = fn(6325);
const memoResult = fn(19).memo(
  module_6325.createBottomSheetScrollableComponent(fn(6113).SCROLLABLE_TYPE.VIRTUALIZEDLIST, animatedComponent),
);
memoResult.displayName = "BottomSheetVirtualizedList";

export default memoResult;
