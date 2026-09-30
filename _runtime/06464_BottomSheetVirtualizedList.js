// _runtime/06464_BottomSheetVirtualizedList.js
import cancelAnimation from "01638_cancelAnimation.js";

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).VirtualizedList);
const module_6454 = fn(6454);
const memoResult = fn(19).memo(
  module_6454.createBottomSheetScrollableComponent(fn(6242).SCROLLABLE_TYPE.VIRTUALIZEDLIST, animatedComponent),
);
memoResult.displayName = "BottomSheetVirtualizedList";

export default memoResult;
