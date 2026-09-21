// _runtime/07092_BottomSheetVirtualizedList.js
import cancelAnimation from "01637_cancelAnimation.js";

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).VirtualizedList);
const module_7082 = fn(7082);
const memoResult = fn(19).memo(
  module_7082.createBottomSheetScrollableComponent(fn(6870).SCROLLABLE_TYPE.VIRTUALIZEDLIST, animatedComponent),
);
memoResult.displayName = "BottomSheetVirtualizedList";

export default memoResult;
