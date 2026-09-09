// _runtime/06864_BottomSheetVirtualizedList.js
import cancelAnimation from "01636_cancelAnimation.js";

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).VirtualizedList);
const module_6854 = fn(6854);
const memoResult = fn(19).memo(
  module_6854.createBottomSheetScrollableComponent(fn(6642).SCROLLABLE_TYPE.VIRTUALIZEDLIST, animatedComponent),
);
memoResult.displayName = "BottomSheetVirtualizedList";

export default memoResult;
