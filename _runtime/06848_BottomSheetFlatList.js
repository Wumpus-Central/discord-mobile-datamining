// _runtime/06848_BottomSheetFlatList.js
import cancelAnimationDefault from "01636_cancelAnimation.js";
import createBottomSheetScrollableComponent from "06840_createBottomSheetScrollableComponent.js";

const animatedComponent = cancelAnimationDefault.createAnimatedComponent(require("get ActivityIndicator").FlatList);
const memoResult = require("noop").memo(
  createBottomSheetScrollableComponent.createBottomSheetScrollableComponent(
    require("GESTURE_SOURCE").SCROLLABLE_TYPE.FLATLIST,
    animatedComponent,
  ),
);
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;
