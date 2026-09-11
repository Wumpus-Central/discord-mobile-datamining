// _runtime/06921_BottomSheetVirtualizedList.js
import cancelAnimation from "01636_cancelAnimation.js";

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).VirtualizedList);
const module_6911 = fn(6911);
const memoResult = fn(19).memo(
  module_6911.createBottomSheetScrollableComponent(fn(6699).SCROLLABLE_TYPE.VIRTUALIZEDLIST, animatedComponent),
);
memoResult.displayName = "BottomSheetVirtualizedList";

export default memoResult;
