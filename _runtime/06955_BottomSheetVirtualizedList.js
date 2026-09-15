// _runtime/06955_BottomSheetVirtualizedList.js
import cancelAnimation from "01637_cancelAnimation.js";

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).VirtualizedList);
const module_6945 = fn(6945);
const memoResult = fn(19).memo(
  module_6945.createBottomSheetScrollableComponent(fn(6733).SCROLLABLE_TYPE.VIRTUALIZEDLIST, animatedComponent),
);
memoResult.displayName = "BottomSheetVirtualizedList";

export default memoResult;
