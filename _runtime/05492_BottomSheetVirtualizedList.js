// _runtime/05492_BottomSheetVirtualizedList.js
import cancelAnimation from "01658_cancelAnimation.js";

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).VirtualizedList);
const module_5482 = fn(5482);
const memoResult = fn(19).memo(
  module_5482.createBottomSheetScrollableComponent(fn(5270).SCROLLABLE_TYPE.VIRTUALIZEDLIST, animatedComponent),
);
memoResult.displayName = "BottomSheetVirtualizedList";

export default memoResult;
