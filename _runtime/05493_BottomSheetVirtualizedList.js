// _runtime/05493_BottomSheetVirtualizedList.js
import cancelAnimation from "01651_cancelAnimation.js";

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).VirtualizedList);
const module_5483 = fn(5483);
const memoResult = fn(19).memo(
  module_5483.createBottomSheetScrollableComponent(fn(5271).SCROLLABLE_TYPE.VIRTUALIZEDLIST, animatedComponent),
);
memoResult.displayName = "BottomSheetVirtualizedList";

export default memoResult;
