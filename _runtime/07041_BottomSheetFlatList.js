// _runtime/07041_BottomSheetFlatList.js
import cancelAnimation from "01637_cancelAnimation.js";

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).FlatList);
const module_7033 = fn(7033);
const memoResult = fn(19).memo(
  module_7033.createBottomSheetScrollableComponent(fn(6821).SCROLLABLE_TYPE.FLATLIST, animatedComponent),
);
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;
