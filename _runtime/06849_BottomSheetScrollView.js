// === Module 6849: BottomSheetScrollView ===

// Module 6849 (BottomSheetScrollView)
import cancelAnimationDefault from "cancelAnimation" /* 1636 */;
import createBottomSheetScrollableComponent from "createBottomSheetScrollableComponent" /* 6840 */;

const animatedComponent = cancelAnimationDefault.createAnimatedComponent(require("get ActivityIndicator").ScrollView);
const memoResult = require("noop").memo(createBottomSheetScrollableComponent.createBottomSheetScrollableComponent(require("GESTURE_SOURCE").SCROLLABLE_TYPE.SCROLLVIEW, animatedComponent));
memoResult.displayName = "BottomSheetScrollView";

export default memoResult;