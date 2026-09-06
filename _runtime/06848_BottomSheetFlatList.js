// === Module 6848: BottomSheetFlatList ===

// Module 6848 (BottomSheetFlatList)
import cancelAnimationDefault from "cancelAnimation" /* 1636 */;
import createBottomSheetScrollableComponent from "createBottomSheetScrollableComponent" /* 6840 */;

const animatedComponent = cancelAnimationDefault.createAnimatedComponent(require("get ActivityIndicator").FlatList);
const memoResult = require("noop").memo(createBottomSheetScrollableComponent.createBottomSheetScrollableComponent(require("GESTURE_SOURCE").SCROLLABLE_TYPE.FLATLIST, animatedComponent));
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;