// _runtime/06850_BottomSheetVirtualizedList.js
import cancelAnimation from "01636_cancelAnimation.js";

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).VirtualizedList);
const module_6840 = fn(6840);
const memoResult = fn(19).memo(
  module_6840.createBottomSheetScrollableComponent(fn(6628).SCROLLABLE_TYPE.VIRTUALIZEDLIST, animatedComponent),
);
memoResult.displayName = "BottomSheetVirtualizedList";

export default memoResult;
