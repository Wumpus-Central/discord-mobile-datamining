// _runtime/06268_BottomSheetVirtualizedList.js
import cancelAnimation from "01638_cancelAnimation.js";

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).VirtualizedList);
const module_6258 = fn(6258);
const memoResult = fn(19).memo(
  module_6258.createBottomSheetScrollableComponent(fn(6046).SCROLLABLE_TYPE.VIRTUALIZEDLIST, animatedComponent),
);
memoResult.displayName = "BottomSheetVirtualizedList";

export default memoResult;
