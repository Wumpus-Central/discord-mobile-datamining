// _runtime/07092_BottomSheetFlatList.js
import cancelAnimation from "01637_cancelAnimation.js";

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).FlatList);
const module_7084 = fn(7084);
const memoResult = fn(19).memo(
  module_7084.createBottomSheetScrollableComponent(fn(6872).SCROLLABLE_TYPE.FLATLIST, animatedComponent),
);
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;
