// _runtime/06521_BottomSheetVirtualizedList.js
import cancelAnimation from "01655_cancelAnimation.js";

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).VirtualizedList);
const module_6511 = fn(6511);
const memoResult = fn(19).memo(
  module_6511.createBottomSheetScrollableComponent(fn(6299).SCROLLABLE_TYPE.VIRTUALIZEDLIST, animatedComponent),
);
memoResult.displayName = "BottomSheetVirtualizedList";

export default memoResult;
