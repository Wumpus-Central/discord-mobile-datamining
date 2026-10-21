// _runtime/05474_BottomSheetVirtualizedList.js
import cancelAnimation from "01658_cancelAnimation.js";

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).VirtualizedList);
const module_5464 = fn(5464);
const memoResult = fn(19).memo(
  module_5464.createBottomSheetScrollableComponent(fn(5252).SCROLLABLE_TYPE.VIRTUALIZEDLIST, animatedComponent),
);
memoResult.displayName = "BottomSheetVirtualizedList";

export default memoResult;
