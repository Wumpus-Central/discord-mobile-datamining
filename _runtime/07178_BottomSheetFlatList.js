// _runtime/07178_BottomSheetFlatList.js
import cancelAnimation from "01637_cancelAnimation.js";

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).FlatList);
const module_7170 = fn(7170);
const memoResult = fn(19).memo(
  module_7170.createBottomSheetScrollableComponent(fn(6958).SCROLLABLE_TYPE.FLATLIST, animatedComponent),
);
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;
