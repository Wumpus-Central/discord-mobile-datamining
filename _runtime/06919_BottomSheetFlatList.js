// _runtime/06919_BottomSheetFlatList.js
import cancelAnimation from "01636_cancelAnimation.js";

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).FlatList);
const module_6911 = fn(6911);
const memoResult = fn(19).memo(
  module_6911.createBottomSheetScrollableComponent(fn(6699).SCROLLABLE_TYPE.FLATLIST, animatedComponent),
);
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;
