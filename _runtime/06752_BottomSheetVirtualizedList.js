// _runtime/06752_BottomSheetVirtualizedList.js
import cancelAnimation from "01658_cancelAnimation.js";

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).VirtualizedList);
const module_6742 = fn(6742);
const memoResult = fn(19).memo(
  module_6742.createBottomSheetScrollableComponent(fn(6530).SCROLLABLE_TYPE.VIRTUALIZEDLIST, animatedComponent),
);
memoResult.displayName = "BottomSheetVirtualizedList";

export default memoResult;
