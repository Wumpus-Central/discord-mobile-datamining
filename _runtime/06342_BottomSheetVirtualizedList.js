// _runtime/06342_BottomSheetVirtualizedList.js
import cancelAnimation from "01643_cancelAnimation.js";

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).VirtualizedList);
const module_6332 = fn(6332);
const memoResult = fn(19).memo(
  module_6332.createBottomSheetScrollableComponent(fn(6120).SCROLLABLE_TYPE.VIRTUALIZEDLIST, animatedComponent),
);
memoResult.displayName = "BottomSheetVirtualizedList";

export default memoResult;
