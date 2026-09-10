// _runtime/06900_BottomSheetVirtualizedList.js
import cancelAnimation from "01636_cancelAnimation.js";

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).VirtualizedList);
const module_6890 = fn(6890);
const memoResult = fn(19).memo(
  module_6890.createBottomSheetScrollableComponent(fn(6678).SCROLLABLE_TYPE.VIRTUALIZEDLIST, animatedComponent),
);
memoResult.displayName = "BottomSheetVirtualizedList";

export default memoResult;
