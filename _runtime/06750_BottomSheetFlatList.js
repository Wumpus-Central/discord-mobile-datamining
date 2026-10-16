// _runtime/06750_BottomSheetFlatList.js
import cancelAnimation from "01658_cancelAnimation.js";

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).FlatList);
const module_6742 = fn(6742);
const memoResult = fn(19).memo(
  module_6742.createBottomSheetScrollableComponent(fn(6530).SCROLLABLE_TYPE.FLATLIST, animatedComponent),
);
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;
