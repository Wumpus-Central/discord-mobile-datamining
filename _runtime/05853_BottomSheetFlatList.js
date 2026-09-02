// === Module 5853: BottomSheetFlatList ===

// Module 5853 (BottomSheetFlatList)
import cancelAnimationDefault from "cancelAnimation" /* 1652 */;
import createBottomSheetScrollableComponent from "createBottomSheetScrollableComponent" /* 5845 */;

const animatedComponent = cancelAnimationDefault.createAnimatedComponent(require("get ActivityIndicator").FlatList);
const memoResult = require("noop").memo(createBottomSheetScrollableComponent.createBottomSheetScrollableComponent(require("GESTURE_SOURCE").SCROLLABLE_TYPE.FLATLIST, animatedComponent));
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;