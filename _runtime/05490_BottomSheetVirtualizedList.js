// _runtime/05490_BottomSheetVirtualizedList.js
import cancelAnimation from "01658_cancelAnimation.js";

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).VirtualizedList);
const module_5480 = fn(5480);
const memoResult = fn(19).memo(
  module_5480.createBottomSheetScrollableComponent(fn(5268).SCROLLABLE_TYPE.VIRTUALIZEDLIST, animatedComponent),
);
memoResult.displayName = "BottomSheetVirtualizedList";

export default memoResult;
