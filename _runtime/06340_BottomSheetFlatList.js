// _runtime/06340_BottomSheetFlatList.js
import cancelAnimation from "01643_cancelAnimation.js";

const animatedComponent = cancelAnimation.createAnimatedComponent(fn(17).FlatList);
const module_6332 = fn(6332);
const memoResult = fn(19).memo(
  module_6332.createBottomSheetScrollableComponent(fn(6120).SCROLLABLE_TYPE.FLATLIST, animatedComponent),
);
memoResult.displayName = "BottomSheetFlatList";

export default memoResult;
