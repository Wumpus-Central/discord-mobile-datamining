// === Module 7071: BottomSheetScrollView ===

// Module 7071 (BottomSheetScrollView)
import cancelAnimationDefault from "cancelAnimation" /* 1654 */;
import createBottomSheetScrollableComponent from "createBottomSheetScrollableComponent" /* 7062 */;

const animatedComponent = cancelAnimationDefault.createAnimatedComponent(require("get ActivityIndicator").ScrollView);
const memoResult = require("noop").memo(createBottomSheetScrollableComponent.createBottomSheetScrollableComponent(require("GESTURE_SOURCE").SCROLLABLE_TYPE.SCROLLVIEW, animatedComponent));
memoResult.displayName = "BottomSheetScrollView";

export default memoResult;