// _runtime/06956_BottomSheetFlatList.js
import cancelAnimation from "01637_cancelAnimation.js";

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).FlatList);
const module_6948 = fn(6948);
const memoResult = fn(19).memo(
  module_6948.createBottomSheetScrollableComponent(fn(6736).SCROLLABLE_TYPE.FLATLIST, animatedComponent),
);
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;
