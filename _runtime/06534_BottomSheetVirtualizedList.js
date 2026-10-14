// _runtime/06534_BottomSheetVirtualizedList.js
import cancelAnimation from "01656_cancelAnimation.js";

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).VirtualizedList);
const module_6524 = fn(6524);
const memoResult = fn(19).memo(
  module_6524.createBottomSheetScrollableComponent(fn(6312).SCROLLABLE_TYPE.VIRTUALIZEDLIST, animatedComponent),
);
memoResult.displayName = "BottomSheetVirtualizedList";

export default memoResult;
