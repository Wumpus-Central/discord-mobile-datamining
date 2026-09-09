// === Module 6864: BottomSheetVirtualizedList ===

// Module 6864 (BottomSheetVirtualizedList)
import cancelAnimation from "cancelAnimation" /* 1636 */;

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).VirtualizedList);
const module_6854 = fn(6854);
const memoResult = fn(19).memo(module_6854.createBottomSheetScrollableComponent(fn(6642).SCROLLABLE_TYPE.VIRTUALIZEDLIST, animatedComponent));
memoResult.displayName = "BottomSheetVirtualizedList";

export default memoResult;