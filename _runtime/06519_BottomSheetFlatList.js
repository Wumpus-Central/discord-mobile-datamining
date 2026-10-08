// _runtime/06519_BottomSheetFlatList.js
import cancelAnimation from "01655_cancelAnimation.js";

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).FlatList);
const module_6511 = fn(6511);
const memoResult = fn(19).memo(
  module_6511.createBottomSheetScrollableComponent(fn(6299).SCROLLABLE_TYPE.FLATLIST, animatedComponent),
);
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;
