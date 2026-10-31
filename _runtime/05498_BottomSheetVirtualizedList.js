// _runtime/05498_BottomSheetVirtualizedList.js
import cancelAnimation from "01650_cancelAnimation.js";

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).VirtualizedList);
const module_5488 = fn(5488);
const memoResult = fn(19).memo(
  module_5488.createBottomSheetScrollableComponent(fn(5276).SCROLLABLE_TYPE.VIRTUALIZEDLIST, animatedComponent),
);
memoResult.displayName = "BottomSheetVirtualizedList";

export default memoResult;
