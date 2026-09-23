// _runtime/07176_BottomSheetFlatList.js
import cancelAnimation from "01637_cancelAnimation.js";

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).FlatList);
const module_7168 = fn(7168);
const memoResult = fn(19).memo(
  module_7168.createBottomSheetScrollableComponent(fn(6956).SCROLLABLE_TYPE.FLATLIST, animatedComponent),
);
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;
