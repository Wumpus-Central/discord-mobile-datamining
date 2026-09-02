// _runtime/05853_BottomSheetFlatList.js
import cancelAnimationDefault from "01652_cancelAnimation.js";
import createBottomSheetScrollableComponent from "05845_createBottomSheetScrollableComponent.js";

const animatedComponent = cancelAnimationDefault.createAnimatedComponent(require("get ActivityIndicator").FlatList);
const memoResult = require("noop").memo(
  createBottomSheetScrollableComponent.createBottomSheetScrollableComponent(
    require("GESTURE_SOURCE").SCROLLABLE_TYPE.FLATLIST,
    animatedComponent,
  ),
);
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;
