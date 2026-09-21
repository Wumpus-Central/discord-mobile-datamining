// _runtime/07090_BottomSheetFlatList.js
import cancelAnimation from "01637_cancelAnimation.js";

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).FlatList);
const module_7082 = fn(7082);
const memoResult = fn(19).memo(
  module_7082.createBottomSheetScrollableComponent(fn(6870).SCROLLABLE_TYPE.FLATLIST, animatedComponent),
);
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;
