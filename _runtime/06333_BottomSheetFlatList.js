// _runtime/06333_BottomSheetFlatList.js
import cancelAnimation from "01643_cancelAnimation.js";

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).FlatList);
const module_6325 = fn(6325);
const memoResult = fn(19).memo(
  module_6325.createBottomSheetScrollableComponent(fn(6113).SCROLLABLE_TYPE.FLATLIST, animatedComponent),
);
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;
