// _runtime/06951_BottomSheetVirtualizedList.js
import cancelAnimation from "01636_cancelAnimation.js";

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).VirtualizedList);
const module_6941 = fn(6941);
const memoResult = fn(19).memo(
  module_6941.createBottomSheetScrollableComponent(fn(6729).SCROLLABLE_TYPE.VIRTUALIZEDLIST, animatedComponent),
);
memoResult.displayName = "BottomSheetVirtualizedList";

export default memoResult;
