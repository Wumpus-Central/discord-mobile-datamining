// === Module 6530: BottomSheetVirtualizedList ===

// Module 6530 (BottomSheetVirtualizedList)
import cancelAnimation from "cancelAnimation" /* 1656 */;

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).VirtualizedList);
const module_6520 = fn(6520);
const memoResult = fn(19).memo(module_6520.createBottomSheetScrollableComponent(fn(6308).SCROLLABLE_TYPE.VIRTUALIZEDLIST, animatedComponent));
memoResult.displayName = "BottomSheetVirtualizedList";

export default memoResult;