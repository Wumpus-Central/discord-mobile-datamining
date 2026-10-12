// _runtime/06530_BottomSheetVirtualizedList.js
import cancelAnimation from "01656_cancelAnimation.js";

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).VirtualizedList);
const module_6520 = fn(6520);
const memoResult = fn(19).memo(
  module_6520.createBottomSheetScrollableComponent(fn(6308).SCROLLABLE_TYPE.VIRTUALIZEDLIST, animatedComponent),
);
memoResult.displayName = "BottomSheetVirtualizedList";

export default memoResult;
