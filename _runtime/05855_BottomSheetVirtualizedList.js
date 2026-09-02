// === Module 5855: BottomSheetVirtualizedList ===

// Module 5855 (BottomSheetVirtualizedList)
import cancelAnimationDefault from "cancelAnimation" /* 1652 */;
import createBottomSheetScrollableComponent from "createBottomSheetScrollableComponent" /* 5845 */;

const animatedComponent = cancelAnimationDefault.createAnimatedComponent(require("get ActivityIndicator").VirtualizedList);
const memoResult = require("noop").memo(createBottomSheetScrollableComponent.createBottomSheetScrollableComponent(require("GESTURE_SOURCE").SCROLLABLE_TYPE.VIRTUALIZEDLIST, animatedComponent));
memoResult.displayName = "BottomSheetVirtualizedList";

export default memoResult;