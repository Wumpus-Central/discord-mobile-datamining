// _runtime/06862_BottomSheetFlatList.js
import cancelAnimation from "01636_cancelAnimation.js";

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).FlatList);
const module_6854 = fn(6854);
const memoResult = fn(19).memo(
  module_6854.createBottomSheetScrollableComponent(fn(6642).SCROLLABLE_TYPE.FLATLIST, animatedComponent),
);
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;
